module Api
  class CoffeesController < ApplicationController
    def index
      @coffees = Coffee.for_api.page(params[:page])
      render json: @coffees, each_serializer: CoffeeSerializer
    end
  end
end
