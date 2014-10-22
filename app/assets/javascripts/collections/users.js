//= require ../models/user

namespace('Pagoda.collections')

Pagoda.collections.Users = Backbone.Collection.extend({
  model: Pagoda.models.User
})