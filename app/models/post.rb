class Post < ApplicationRecord
  validates :filename, presence: true
  validates :picture, presence: true
  #mount_uploader :picture, PictureUploader
  mount_base64_uploader :picture, PictureUploader
end
