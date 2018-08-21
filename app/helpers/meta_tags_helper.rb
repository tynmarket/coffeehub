module MetaTagsHelper
  def default_meta_tags
    {
      title: title_tag,
      description: description_tag
    }
  end

  def title_tag
    "Coffee Hub - #{page_coffee_text}の新着コーヒー豆を紹介"
  end

  def description_tag
    "オススメの美味しい#{page_coffee_text}の新着コーヒー豆を紹介しています。Mui、ROKUMEI COFFEE、珈琲きゃろっと、ブルーボトルコーヒーなど、" \
    "選りすぐりの名店の最新の入荷情報をチェックしましょう。"
  end

  def page_coffee_text
    case controller_name
    when "coffees"
      Coffee.roast_text(@roast)
    else
      "シングルオリジン"
    end
  end
end
