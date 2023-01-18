class User < ApplicationRecord
   # adds virtual attributes for authentication
  has_secure_password
  validates :name, :password,  presence: true
 # validates :email, uniqueness: true
  # validates email
  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
end
