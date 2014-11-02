namespace('Pagoda.views.teams')

Pagoda.views.teams.Show = Marionette.LayoutView.extend({

  template: HandlebarsTemplates["teams/show"],
  
  className: 'container',
  
  initialize: function() {
    this.model.on('change', this.render, this);
    this.childrenViews = [];
  },

  regions: function(options){
    return {
      navRegion: '#navbar',
      teamPanel: '#team-panel',
      crumbs:    '#crumbs'
    };
  },
  
  onRender: function() {
    this.navRegion.show(new Pagoda.views.teams.Navbar());
    this.teamPanel.show(new Pagoda.views.projects.Index({ model: this.model }));
  },
  
  pushView: function(currentView, view, regionName) {
    this.childrenViews.push(currentView);
    this.crumbs.show(new Pagoda.views.teams.Crumbs({ collection: this.childrenViews }));
    this.regionManager.get(regionName).show(view, { preventDestroy: true });
  },
  
  cleanCrumbs: function() {
    this.childrenViews = [];
    this.render();
  }

});