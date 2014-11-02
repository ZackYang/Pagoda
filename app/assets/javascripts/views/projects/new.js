namespace('Pagoda.views.projects')

Pagoda.views.projects.New = Marionette.LayoutView.extend({

  template: HandlebarsTemplates["projects/new"],
  
  className: 'projects-new',
  
  events: {
    'submit form': 'createProject'
  },
  
  createProject: function(e) {
    paramsArray = this.$el.children('form').serializeArray();
    data = _.arrayToObject(paramsArray);
    newProject = new Pagoda.models.Project(data);
    newProject.set({ 'team_id' : this.model.get('id') });
    this.model.get('projects').push(newProject);
    newProject.save(null, {
      success: function() {
        window.mainView.cleanCrumbs();
      }
    });
    return false;
  }

});