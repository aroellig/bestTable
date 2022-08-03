Rails.application.routes.draw do
 
  root to: 'static_pages#root' 
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
  
  end
end
