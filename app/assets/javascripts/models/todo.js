namespace('Pagoda.models')

Pagoda.models.Todo = Backbone.AssociatedModel.extend({
  
  urlRoot: '/api/v1/todos',
  
  fire: function(event) {
    currentModel = this;
    this.save({ fire: event }, {
      success: function() {
        if (event == 'start') {
          currentModel.collection.each(function(todo) {
            if (todo.get('state') == 'handling' && todo.id != currentModel.id) {
              todo.save({ fire: 'complete' });
            }
          })
        }
      }
    });
  }
  
})