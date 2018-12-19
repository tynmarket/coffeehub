module EnumText
  def enum_text(*attributes)
    attributes.each do |attribute|
      define_method "#{attribute}_text" do
        I18n.t(
          send(attribute),
          scope: [:activerecord, :enum, self.class.model_name.singular.to_sym, attribute.to_sym]
        )
      end

      define_singleton_method "#{attribute}_text" do |key|
        I18n.t(
          key,
          scope: [:activerecord, :enum, model_name.singular.to_sym, attribute.to_sym]
        )
      end
    end
  end
end
