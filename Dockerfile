FROM tynmarket/coffeehub-base

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
