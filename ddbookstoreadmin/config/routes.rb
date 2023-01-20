Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
   root "application#index"
 # root :to => redirect('/bookstock')
  resources :bookstock
  resources :user
  resources :login
  resources :logout
end
