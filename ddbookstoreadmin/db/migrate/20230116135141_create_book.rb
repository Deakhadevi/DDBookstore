class CreateBook < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :bookName
      t.string :bookAuthor
      t.integer :bookQuantity
      t.timestamps
    end
  end
end
