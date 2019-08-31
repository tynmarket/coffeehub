source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'active_model_serializers'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'lograge'
gem 'meta-tags'
gem 'mysql2', '>= 0.4.4', '< 0.6.0'
gem 'puma', '~> 3.11'
gem 'rack-cors', require: 'rack/cors'
gem 'rails', '~> 5.2.0'
gem 'sass-rails', '~> 5.0'
gem 'slim-rails'
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem "better_errors"
  gem "binding_of_caller"
  gem 'pry-byebug'
  gem 'pry-rails'
end

group :development do
  gem 'rack-proxy'
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'seed-fu'
  gem 'spring'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15', '< 4.0'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end
