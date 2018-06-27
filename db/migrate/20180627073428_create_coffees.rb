class CreateCoffees < ActiveRecord::Migration[5.2]
  def change
    create_table :coffees do |t|
      t.integer "site_id", null: false
      t.string "path", null: false
      t.string "country", null: false
      t.string "area_or_factory", null: false
      t.integer "roast", null: false
      t.text "taste", null: false

      t.timestamps

      t.index ["site_id"], name: "index_coffees_site_id"
      t.index ["country"], name: "index_coffees_country"
      t.index ["roast"], name: "index_coffees_roast"
      t.index ["created_at"], name: "index_coffees_created_at"
    end
  end
end
