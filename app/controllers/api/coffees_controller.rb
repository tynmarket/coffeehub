module Api
  class CoffeesController < ApplicationController
    def index
      @coffees = Coffee.for_api(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end

    def roast
      @coffees = Coffee.send(params[:roast]).for_api(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end
  end
end
