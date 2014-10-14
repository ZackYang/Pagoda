class SessionsController < ApplicationController
  
  skip_before_filter :verify_authenticity_token, :only => :create
  
  def create
    provider = Provider.find_or_create_by_hash(request.env['omniauth.auth'])
    current_user = provider.user
    redirect_to '/'
  end
  
end
