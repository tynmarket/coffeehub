# docker build -t tynmarket/coffeehub --build-arg rails_master_key=$RAILS_MASTER_KEY_COFFEEHUB .

FROM ruby:2.5.3-alpine3.8

WORKDIR /app

RUN apk upgrade --no-cache && \
    apk add --update --no-cache \
      mysql-client \
      mariadb-connector-c-dev \
      nodejs \
      yarn \
      nginx \
      logrotate \
      tzdata \
      bash \
      less \
      git && \
    mkdir -p /app/tmp/cache && \
    mkdir -p /app/tmp/pids && \
    mkdir -p /app/tmp/sockets && \
    mkdir -p /app/log && \
    mkdir /run/nginx

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
COPY docker/default.conf /etc/nginx/conf.d
COPY docker/nginx.conf /etc/nginx
COPY docker/nginx /etc/logrotate.d
COPY docker/mackerel-agent.sh /app

ARG rails_master_key

ENV TZ Asia/Tokyo
ENV RAILS_MASTER_KEY $rails_master_key

RUN bundle exec rails assets:precompile RAILS_ENV=production && \
    yarn build && \
    rm -rf node_modules

ENTRYPOINT ./mackerel-agent.sh && \
           crond && \
           bundle exec puma -b tcp://0.0.0.0:$PORT
