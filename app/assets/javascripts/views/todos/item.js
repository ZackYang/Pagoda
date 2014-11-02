namespace('Pagoda.views.todos')

Pagoda.views.todos.Item = Marionette.ItemView.extend({

  template: HandlebarsTemplates['todos/item'],
  
  tagName: 'li'
})