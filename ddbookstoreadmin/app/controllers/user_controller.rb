require 'bcrypt'
class UserController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: User.all
    # render json: current_user
  end
  # def authenticate_user
  #    authenticate_user =User.find_by_id(session[:current_user_id])
  # end
  def show
    showbooks= User.find(params[:id].to_i)
    render json: showbooks
  end
  def create
    chk = !params[:name].empty? and !params[:email].empty? and !params[:password].nil?
    if (chk)
          newuser=User.create(
         'email': params[:email],
         'name': params[:name],
         'password': params[:password]
          )
          puts newuser
          render json: "Data Added"
        else
          render json: "Data not added"
     end
   end
   def update
    p = User.find(params[:id].to_i)
        p.update(
          'email': params[:email],
          'name': params[:name],
          'password': params[:password]
        )

          render json: "Data Updated"
    end
    def destroy
        p = User.find(params[:id])
        p.destroy
        render json: "Data Deleted"
    end
end
