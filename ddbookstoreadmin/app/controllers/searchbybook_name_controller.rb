class SearchbybookNameController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    #p=Book.where(bookName:bookName).exists?
    p=Book.find_by('bookAuthor': params[:bookAuthor])
    if (p.nil?)
      render json: "BookAuthor is not available"
   else
      render json: p
   end

   end
end
