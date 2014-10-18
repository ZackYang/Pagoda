FactoryGirl.define do
  factory :user do
    nickname Faker::Name.name
  end

  # This will use the User class (Admin would have been guessed)
  factory :provider  do
    user
  end
  
  factory :team do
    name Faker::Company.name
  end
  
  factory :user_with_team, parent: :user do
    teams { [FactoryGirl.create(:team)] }
  end
  
  factory :project do
    name Faker::Company.name
    team
  end
  
  factory :project_membership do
    user
    project
  end
  
  factory :todo do
    project
    name Faker::Education.degree
  end
end