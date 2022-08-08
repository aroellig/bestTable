class Api::RestaurantsController < ApplicationController
    def show
        @restaurant = Restaurant.find(params[:id]);
        render :show
      end
    
      def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
          render :show
        else
          render json: @restaurant.errors.full_messages, status: 422
        end
      end
        
      def index 
        @restaurants = Restaurant.all
        render :index
      end
  
      def update
        @restaurant = Restaurant.find(params[:restaurant][:id])
        if @restaurant.update(restaurant_params)
          render :show
        else
          render json: @restaurant.errors_full_messages, status:422
        end
      end
  
      def destroy
        @restaurant = Restaurant.find(params[:id])
        @restaurant.destroy
    
        render :show
      end
      
      private
    
      def event_params
        params.require(:restaurant).permit(:name, :location, :tables)
      end
end
