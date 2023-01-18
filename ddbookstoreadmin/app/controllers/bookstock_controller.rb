class BookstockController < ApplicationController
  skip_before_action :verify_authenticity_token
    def index
     render json: Book.all
    end
    def show
     v = Book.find(params[:id].to_i)
      render json: v
    end

  def create
    v = !params[:bookName].empty?
    if (v)
      p=Book.create(
      'bookName': params[:bookName],
      'bookAuthor': params[:bookAuthor],
      'bookQuantity': params[:bookQuantity],
       )
      puts p
      render json: "Data Added"
     else
      render json: "Data not added"
    end
  end
  def update
    p=Book.find(params[:id].to_i)
   puts p
    p.update(
      'bookName': params[:bookName],
      'bookAuthor': params[:bookAuthor],
      'bookQuantity': params[:bookQuantity],
       )
    render json: "Data Updated"
   end
   def destroy
    p=Book.find(params[:id].to_i)
    p.destroy
    render json: "Data Deleted"
  end

end
