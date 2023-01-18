class LogoutController < ApplicationController
  def index
    session.delete(:current_user_id)
    render json: "Logged out successfully"
  end
end
