class Coffee < ApplicationRecord
  belongs_to :site

  enum roast: {
    unknown: 0, light: 1, cinnamon: 2, medium: 3, high: 4,
    city: 5, fullcity: 6, french: 7, italian: 8
  }
  enum_text :roast

  scope :for_api, -> { eager_load(:site).order(created_at: :desc, id: :desc) }
end
