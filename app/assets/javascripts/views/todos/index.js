//= require ./item

namespace('Pagoda.views.todos')

Pagoda.views.todos.Index = Marionette.CollectionView.extend({
  
  childView: Pagoda.views.todos.Item,
  
  tagName: 'ul',
  
  initialize: function() {
    this.collection.on('change reset add remove', this.render, this);
  }

});