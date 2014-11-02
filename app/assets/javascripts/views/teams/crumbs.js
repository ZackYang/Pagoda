namespace('Pagoda.views.teams')

Pagoda.views.teams.Crumbs = Marionette.LayoutView.extend({
  
  tagName: 'ul',
  
  template: HandlebarsTemplates['teams/crumbs'],
  
  events: {
    'click li' : 'renderView'
  },
  
  serializeData: function(data) {
    return { views: window.mainView.childrenViews };
  },
  
  renderView: function(e) {
    index = this.$el.find( "li" ).index(e.currentTarget);
    window.mainView.teamPanel.show(window.mainView.childrenViews[index]);
  
    window.mainView.childrenViews = _.first(window.mainView.childrenViews, index);
    this.render();
  }
  
})