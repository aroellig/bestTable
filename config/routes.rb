Rails.application.routes.draw do
 
  root to: 'static_pages#root' 
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants
    resources :reservations
    resources :openings
  end
end
