Rails.application.routes.draw do
  root 'tops#index'

  resources :coffees, only: [] do
    collection do
      get 'roast/:roast', to: 'coffees#roast'
    end
  end

  namespace :api do
    resources :coffees, only: [:index] do
      collection do
        get 'roast/:roast', to: 'coffees#roast'
      end
    end
  end
end
