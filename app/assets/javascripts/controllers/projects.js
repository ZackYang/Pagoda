namespace('Pagoda.controllers');

Pagoda.controllers.Projects = Marionette.Controller.extend({
  
  initialize: function() {
    this.projects = new PS.collections.Project();
    this.finalizeLoad();
  },
  
  buildModules: function() {
    this.projectsListView = new PS.views.ProjectsListView({ collections: this.product });
  },
  
  attachModules:function() {
    $('#product-detail-form').replaceWith(this.productDetailFormView.$el);
    return this
  },
  
  render: function() {
    this.productDetailFormView.render();
  },
  
  finalizeLoad: function() {
    this.buildModules();
    this.attachModules();
    this.render();
  }
  
})