class CoffeeSerializer < ActiveModel::Serializer
  attributes :shop, :country, :taste, :roast_text, :roast, :arrival_date, :arrival_month, :url
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

  def arrival_month
    object.created_at.month
  end

  def url
    "#{object.site.url}#{object.path}"
  end
end
