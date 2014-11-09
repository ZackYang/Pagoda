namespace('Pagoda.views.projects')

Pagoda.views.projects.Show = Backbone.Marionette.LayoutView.extend({

  template: HandlebarsTemplates["projects/show"],
  
  className: 'project-detail',
  
  events: {
    'click .new-todo-button' : 'addNewTodo',
    'click #cancel-button'   : 'hideNewForm',
  },
  
  initialize: function() {
    this.viewName = this.model.get('name');
    this.model.on('change:todos[*].id', this.showNewTodoBtb, this);
  },
  
  regions: function(options){
    return {
      todosRegion: '#todo-list'
    };
  },
  
  onRender: function() {
    this.todosRegion.show(new Pagoda.views.todos.Index({ collection: this.model.get('todos') }));
  },
  
  addNewTodo: function(e) {
    $(e.currentTarget).hide();
    this.model.get('todos').push(new Pagoda.models.Todo({ project_id: this.model.id }));
  },
  
  showNewTodoBtb: function() {
    $(".new-todo-button").show();
  }
  
});