class ApplicationController < ActionController::Base
  before_action :authenticate_user
  def authenticate_user
    authenticate_user =User.find_by_id(session[:current_user_id])
  end
  def index
    render html: "Book Store"
  end
end
