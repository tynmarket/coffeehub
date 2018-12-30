FROM gcr.io/tynmarket-195002/github-tynmarket-coffeehub-base

RUN mkdir -p /app/tmp/cache \
      && mkdir -p /app/tmp/pids \
      && mkdir -p /app/tmp/sockets \
      && mkdir -p /app/log

COPY . /app
COPY docker/default.conf /etc/nginx/conf.d
COPY docker/nginx /etc/logrotate.d

ARG rails_master_key

ENV TZ Asia/Tokyo
ENV RAILS_MASTER_KEY $rails_master_key

RUN bundle exec rails assets:precompile RAILS_ENV=production
RUN yarn build

EXPOSE 80

ENTRYPOINT bundle exec rails db:migrate \
      && nginx \
      && echo "apikey = \"$MACKEREL_API_KEY\"" >> /etc/mackerel-agent/mackerel-agent.conf \
      && /etc/init.d/mackerel-agent start \
      && bundle exec puma -b unix:///var/run/puma.sock
