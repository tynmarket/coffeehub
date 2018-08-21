class CoffeesController < ApplicationController
  def index
  end

  def roast
    @roast = params[:roast]
  end
end
