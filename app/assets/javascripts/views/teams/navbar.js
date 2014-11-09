namespace('Pagoda.views.teams')

Pagoda.views.teams.Navbar = Marionette.LayoutView.extend({

  template: HandlebarsTemplates["teams/nav"],
  
  className: 'navbar',
  
  templateHelpers: function() {
    return {
      avatar: function() {
        return currentUser.get('avatar');
      }
    }
  }

});

