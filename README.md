# Uploader of cropped image files with Cropper.js and CarrierWave on RoR
Cropper.js and CarrieWave are built on RoR.
- Cropper on front-end.
- CarrieWave on back-end.


# Getting Started
## Prerequisites
- Rails 5.1.6

## Installation
```
$ git clone https://github.com/netzilla/cropper-carriewave-rails.git
$ cd cropper-carriewave-rails
$ bundle init
$ bundle exec rails new
$ bundle exec rails db:migrate
$ bundle exec rails s
```
Go to `http://localhost:3000/posts/new`

## Installation(step by step)
This procedure is that users dig into what and where I customized.

### Install ruby
I used this ruby version.
```
$ rbenv install -l
$ rbenv install 2.4.4
$ rbenv local 2.4.4
```

### Create a new project
```
$ rails new project
$ cd project
```

### Specify what gem dependencies are needed
These gems are minimum required for this project.
This app uses carrierwave-base64 as well as carrierwave for managing base64 encoded image files created by cropper.js.
```
$ vi Gemfile
-snip-
gem 'jquery-rails'
gem 'mini_magick'
gem 'carrierwave'
gem 'carrierwave-base64'
-snip-

$ bundle install
```

### Creating a Resource with Scaffolding
```
$ bundle exec rails g scaffold Post filename:string picture:string

$ vi app/assets/javascripts/application.js
-snip-
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .
-snip-
```


### Migrate to create the posts table
```
$ vi db/migrate/*****_create_posts.rb

class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :filename
      t.string :picture

      t.timestamps
    end
    add_index :posts, [:created_at]
  end
end

$ rails db:migrate
```

### Create an uploader of CarrierWave
Use mse64_uploader, not mount_uploader.
```
$ rails generate uploader Picture

$ vi app/models/post.rb
class Post < ApplicationRecord
  validates :filename, presence: true
  validates :picture, presence: true
  mount_base64_uploader :picture, PictureUploader
  #mount_uploader :picture, PictureUploader
end
```

### Install Cropper JavaScript library.
Copy from this project file.
```
$ vi app/assets/javascripts/cropper.min.js
$ vi app/assets/stylesheets/cropper.min.css
```

### Create and Customize files related views.
Make some alteration to the following files after scaffolding. Read them from this project files.
```
$ vi app/views/posts/new.html.erb
$ vi app/views/posts/_picture.html.erb
$ vi app/assets/javascripts/picture.js
$ vi app/assets/stylesheets/picture.scss
$ vi app/views/posts/_form.html.erb
$ vi app/views/posts/show.html.erb
```

## Code Status
[![Build Status](https://travis-ci.org/rails/rails.svg?branch=master)](https://travis-ci.org/rails/rails)

## License
This app is released under the [MIT License](https://opensource.org/licenses/MIT).


