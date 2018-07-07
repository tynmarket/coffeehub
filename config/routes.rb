Rails.application.routes.draw do
  root 'tops#index'

  namespace :api do
    resources :coffees, only: [:index]
  end
end
