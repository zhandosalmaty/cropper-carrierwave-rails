json.extract! post, :id, :filename, :picture, :created_at, :updated_at
json.url post_url(post, format: :json)
