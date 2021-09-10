class Api::JobsController < ApplicationController
  before_action :set_job, only: [:show, :update, :destroy]

  def index
    render json: Job.all
  end
  
  def show
    render json: @job
  end
  
  def create
    job = Job.new(job_params)
    if job.save
      render json: job
    else
    end
  end
  
  def update
  if @job.update(job_params)
    render json: @job
  else
  end
  end
  
  def destroy
    render json: @job.destroy
  end
  
  private
  
  def set_job
    @job = Job.find(params[:id])
  end
  
  def job_params
    params.require(:job).permit(:title,:company,:salary)
  end
end
