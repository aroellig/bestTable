class Api::ReservationsController < ApplicationController
    before_action :require_logged_in

    def show
        @reservation = Reservation.find(params[:id]);
        render :show
      end
    
    def create 
      @reservation = current_user.reservations.new(reservation_params)
      if @reservation.save
          render :show
          else
            render json: @reservation.errors.full_messages, status: 422
      end
    end
      
    def index 
      @reservations = Reservation.all
      render :index
    end

    def destroy
      @reservation = Reservation.find(params[:id])
      @reservation.destroy
  
      render :show
    end

    private 
    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :name, :number)
    end
end
