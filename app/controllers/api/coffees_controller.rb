module Api
  class CoffeesController < ApplicationController
    def index
      sleep 0.1 # Wait for UX
      @coffees = Coffee.for_api(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end

    def roast
      sleep 0.1 # Wait for UX
      @coffees = Coffee.send(params[:roast]).for_api(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end
  end
end
