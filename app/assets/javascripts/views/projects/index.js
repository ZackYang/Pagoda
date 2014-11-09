namespace('Pagoda.views.projects')

Pagoda.views.projects.Index = Marionette.LayoutView.extend({

  template: HandlebarsTemplates["projects/index"],
  
  className: 'projects-list',
  
  initialize: function() {
    this.viewName = '项目列表';
  },
  
  events: {
    "click .project-item": "processItemClick"
  },
  
  processItemClick: function(e) {
    $el = $(e.currentTarget);
    if ($el.attr('project-id')) {
      this.showProject($el.attr('project-id'));
    } else {
      if ($el.attr('behaviour') == 'new') {
        this.onNewProject();
      }
    }
  },
  
  onNewProject: function() {
    window.mainView.pushView(this, new Pagoda.views.projects.New({ model: this.model }), 'teamPanel');
  },
  
  showProject: function(projectId) {
    currentView = this;
    model = this.model.get('projects').get(projectId);
    model.fetch({
      reset: true,
      success: function(model, response, options) {
        window.mainView.pushView(currentView, new Pagoda.views.projects.Show({ model: model }), 'teamPanel');
      }
    })
  }

});

