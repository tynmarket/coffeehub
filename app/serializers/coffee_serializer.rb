class CoffeeSerializer < ActiveModel::Serializer
  attributes :shop, :country, :taste, :arrival_date
  attribute :roast_text, key: :roast
  attribute :area_or_factory, key: :area
  attribute :new_arrival, key: :new

  def shop
    object.site.name
  end

  def taste
    object.taste.slice(0, 120)
  end

  def new_arrival
    object.created_at >= Time.current.beginning_of_day - 13.days
  end

  def arrival_date
    I18n.l(object.created_at, format: :ms_ds_ja)
  end
end
