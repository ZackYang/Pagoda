//= require ../models/todo

namespace('Pagoda.collections')

Pagoda.collections.Todos = Backbone.Collection.extend({
  model: Pagoda.models.Todo
})