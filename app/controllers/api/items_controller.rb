class Api::ItemsController < ApplicationController
  before_action :set_pet
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: {pet: @pet, item:@pet.items}
  end
  
  def show
    render json: @item
  end
  
  def create
    item = @pet.items.new(item_params)
    if item.save
      render json: item
    else
    end
  end
  
  def update
  if @item.update(item_params)
    render json: @item
  else
  end
  end
  
  def destroy
    render json: @item.destroy
  end
  
  private
  
  def set_pet
    @pet = Pet.find(params[:pet_id])
  end

  def set_item
    @item = @pet.items.find(params[:id])
  end
  
  def item_params
    params.require(:item).permit(:name, :description, :price)
  end


end
