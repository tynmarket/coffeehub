module Api
  class CoffeesController < ApplicationController
    def index
      sleep 0.1
      @coffees = Coffee.for_api(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end

    def roast
      sleep 0.1
      @coffees = Coffee.send(params[:roast]).for_api(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end
  end
end
