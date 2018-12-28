FROM ruby:2.5.1

RUN apt-get update \
      # mysql
      && apt-get install --yes --no-install-recommends mysql-client \
      # nginx
      && wget https://nginx.org/keys/nginx_signing.key \
      && apt-key add nginx_signing.key \
      && echo 'deb http://nginx.org/packages/debian/ stretch nginx' >> /etc/apt/sources.list \
      && echo 'deb-src http://nginx.org/packages/debian/ stretch nginx' >> /etc/apt/sources.list \
      && apt-get update \
      && apt-get install --yes --no-install-recommends nginx \
      # logrotate
      && apt-get install logrotate -y --no-install-recommends \
      # mackerel
      && curl -LO https://mackerel.io/file/agent/deb/mackerel-agent_latest.all.deb \
      && dpkg -i mackerel-agent_latest.all.deb \
      # node
      && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
      && apt-get install -y nodejs \
      # yarn
      && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
      && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
      && apt-get update \
      && apt-get install -y yarn \
      # clean up
      && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile Gemfile.lock package.json yarn.lock /app/

RUN bundle install --jobs=4 --deployment --path /usr/local/bundle --without development test
RUN yarn install --production

RUN mkdir -p /app/tmp/cache \
      && mkdir -p /app/tmp/pids \
      && mkdir -p /app/tmp/sockets \
      && mkdir -p /app/log

COPY . /app
COPY docker/default.conf /etc/nginx/conf.d
COPY docker/nginx /etc/logrotate.d

ENV TZ Asia/Tokyo

RUN bundle exec rails assets:precompile RAILS_ENV=production

EXPOSE 80

ENTRYPOINT bundle exec rails db:migrate \
      && nginx \
      && echo "apikey = \"$MACKEREL_API_KEY\"" >> /etc/mackerel-agent/mackerel-agent.conf \
      && /etc/init.d/mackerel-agent start \
      && bundle exec puma -b unix:///var/run/puma.sock
