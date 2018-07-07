class ApplicationRecord < ActiveRecord::Base
  extend EnumText

  self.abstract_class = true
end
