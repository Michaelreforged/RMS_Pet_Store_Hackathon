class Api::PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]

  def index
    render json: Pet.all
  end
  
  def show
    render json: @pet
  end
  
  def create
    pet = Pet.new(pet_params)
    if pet.save
      render json: pet
    else
    end
  end
  
  def update
  if @pet.update(pet_params)
    render json: @pet
  else
  end
  end
  
  def destroy
    render json: @pet.destroy
  end
  
  private
  
  def set_pet
    @pet = Pet.find(params[:id])
  end
  
  def pet_params
    params.require(:pet).permit(:name)
  end
end
