Rails.application.configure do
  config.lograge.formatter = Lograge::Formatters::Json.new

  config.lograge.custom_options = lambda do |event|
    { time: event.time }
  end
end
