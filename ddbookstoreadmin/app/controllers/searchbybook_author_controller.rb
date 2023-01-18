class SearchbybookAuthorController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    #p=Book.where(bookName:bookName).exists?
    p=Book.find_by('bookName': params[:bookName])
    if (p.nil?)
      render json: "Bookname is not available"
   else
      render json: p
   end
   end
end
