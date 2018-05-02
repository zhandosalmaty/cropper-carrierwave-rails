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
