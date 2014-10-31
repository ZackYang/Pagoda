namespace('Pagoda.views.teams')

Pagoda.views.teams.Show = Marionette.Layout.extend({

  template: HandlebarsTemplates["teams/show"],
  
  className: 'container',

  regions: function(options){
    return {
      navRegion: "#navbar",
      pagesRegion: '#pages'
    };
  },
  
  onRender: function() {
    this.navRegion.show(new Pagoda.views.teams.Navbar())
  }

});

