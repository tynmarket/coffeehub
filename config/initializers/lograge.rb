Rails.application.config.lograge.custom_options = lambda do |event|
  { time: event.time }
end
