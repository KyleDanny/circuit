class Event < ApplicationRecord
  attr_accessor :start_date, :end_date

  validates :start_time, :end_time, presence: true
  default_scope -> { order(:start_time) }  # Our meetings will be ordered by their start_time by default

  has_many :bookings
  has_many :users, through: :bookings

  def time
    "#{start_time.strftime('%I:%M %p')} - #{end_time.strftime('%I:%M %p')}"
  end

  def match_making
    # get users males/females
    users.males.each do |male|
      users.females.each do |female|
        match = Match.create(event: self)
        UserMatch.create(user: female, match: match, status: "pending")
        UserMatch.create(user: male, match: match, status: "pending")
      end
    end
  end
  # => Can call Event.match_making
end
