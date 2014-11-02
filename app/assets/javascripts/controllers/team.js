namespace('Pagoda.controllers');

Pagoda.controllers.Team = Marionette.Controller.extend({
  
  initialize: function() {
    this.team = new Pagoda.models.Team({ id: this.options.id });
    this.finalizeLoad();
  },
  
  buildModules: function() {
    this.teamView = new Pagoda.views.teams.Show({ model: this.team });
    window.mainView = this.teamView;
  },
  
  attachModules:function() {
    $('.container').replaceWith(this.teamView.$el);
    return this
  },
  
  render: function() {
    this.teamView.render();
  },
  
  finalizeLoad: function() {
    this.buildModules();
    this.attachModules();
    // this.render();
    this.team.fetch();
  }
  
})