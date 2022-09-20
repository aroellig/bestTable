class Api::OpeningssController < ApplicationController
    before_action :require_logged_in

    def show
        @opening = Opening.find(params[:id]);
        render :show
      end
    
    def create 
      @opening = Opening.new(opening_params)
      if @opening.save
          render :show
          else
            render json: @opening.errors.full_messages, status: 422
      end
    end
      
    def index 
      @openings = Opening.all
      render :index
    end

    def destroy
      @opening = Opening.find(params[:id])
      @opening.destroy
  
      render :show
    end

    private 
    def reservation_params
        params.require(:reservation).permit(:restaurant_id,:number, :date)
    end
end