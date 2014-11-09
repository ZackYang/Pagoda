//= require ./item

namespace('Pagoda.views.todos')

Pagoda.views.todos.Index = Marionette.CollectionView.extend({
  
  childView: Pagoda.views.todos.Item,
  
  tagName: 'ul',
  
  className: 'todo-list'

});