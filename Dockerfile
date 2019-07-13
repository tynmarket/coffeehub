# docker build -t tynmarket/coffeehub --build-arg rails_master_key=$RAILS_MASTER_KEY_COFFEEHUB .
# docker run --rm --name coffeehub -p 8080:8080 --env DB_HOST=$DB_HOST_COFFEEHUB --env DB_USERNAME=$DB_USERNAME --env DB_PASSWORD=$DB_PASSWORD --env DISABLE_MACKEREL=true --env GMAIL_USERNAME=$GMAIL_USERNAME --env GMAIL_PASSWORD=$GMAIL_PASSWORD --env RAILS_ENV=production --env PORT=8080 --env RAILS_SERVE_STATIC_FILES=true tynmarket/coffeehub
# gcloud beta run deploy coffeehub --image gcr.io/tynmarket-195002/github-tynmarket-coffeehub-stg:latest --platform managed --allow-unauthenticated --set-env-vars DB_HOST=$DB_HOST --set-env-vars DB_USERNAME=$DB_USERNAME --set-env-vars DB_PASSWORD=$DB_PASSWORD --set-env-vars DISABLE_MACKEREL=true --set-env-vars GMAIL_USERNAME=$GMAIL_USERNAME --set-env-vars GMAIL_PASSWORD=$GMAIL_PASSWORD --set-env-vars RAILS_ENV=staging --set-env-vars RAILS_LOG_TO_STDOUT=true --set-env-vars RAILS_SERVE_STATIC_FILES=true

FROM ruby:2.5.3-alpine3.8

WORKDIR /app

RUN apk upgrade --no-cache && \
    apk add --update --no-cache \
      mysql-client \
      mariadb-connector-c-dev \
      nodejs \
      yarn \
      logrotate \
      tzdata \
      bash \
      less \
      git && \
    mkdir -p /app/tmp/cache && \
    mkdir -p /app/tmp/pids && \
    mkdir -p /app/tmp/sockets && \
    mkdir -p /app/log

COPY Gemfile Gemfile.lock yarn.lock /app/

RUN apk add --update --no-cache --virtual=build-dependencies \
      build-base \
      curl \
      tar \
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      ruby-dev \
      yaml-dev \
      zlib-dev && \
    gem install bundler && \
    bundle install -j4 --deployment --path /usr/local/bundle --without development test && \
    yarn install --production && \
    curl -LO https://mackerel.io/file/agent/tgz/mackerel-agent-latest.tar.gz && \
    tar xvzf mackerel-agent-latest.tar.gz && \
    apk del build-dependencies

COPY . /app
COPY docker/mackerel-agent.sh /app

ARG rails_master_key

ENV TZ Asia/Tokyo
ENV RAILS_MASTER_KEY $rails_master_key

RUN bundle exec rails assets:precompile RAILS_ENV=production && \
    yarn build && \
    rm -rf node_modules

# Cloud Runではなくローカルで動作確認のため
EXPOSE $PORT

ENTRYPOINT ./mackerel-agent.sh && \
           crond && \
           bundle exec puma -b tcp://0.0.0.0:$PORT
