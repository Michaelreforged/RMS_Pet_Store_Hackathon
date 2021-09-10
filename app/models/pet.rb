class Pet < ApplicationRecord
  has_many :items, dependent: :destroy
end
