require 'bcrypt'
class LoginController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
     render html: "welcome to Login Page"
  end
  def create
    usr = User.find_by('email': params[:email])
        if (usr.nil?)
            render json: "User account does not exist"
          else
            # Save the user ID in the session so it can be used in
          # subsequent requests
            if (usr.authenticate(params[:password]))
                session[:current_user_id] = usr.id
                redirect_to root_url
            else
                render json: "Incorrect Password"
            end
        end
    end



def destroy
    # session.delete(:current_user_id)
    render json: "Logged out successfully"
end
end
