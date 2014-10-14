FactoryGirl.define do
  factory :user do
    nickname Faker::Name.name
  end

  # This will use the User class (Admin would have been guessed)
  factory :provider  do
    user
  end
end