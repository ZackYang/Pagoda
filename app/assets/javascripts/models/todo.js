namespace('Pagoda.models')

Pagoda.models.Todo = Backbone.AssociatedModel.extend({
  
  urlRoot: function() {
    return '/api/v1/todos';
  },
  
})