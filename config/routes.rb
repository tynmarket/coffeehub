Rails.application.routes.draw do
  root 'tops#index'

  namespace :api do
    resources :coffees, only: [:index] do
      collection do
        get 'roast/:roast', to: 'coffees#roast'
      end
    end
  end
end
