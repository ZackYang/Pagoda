//= require ../models/todo
//= require ../collections/todos
//= require ../models/user
//= require ../collections/users

namespace('Pagoda.models')

Pagoda.models.Project = Backbone.AssociatedModel.extend({
  
  urlRoot: function() {
    return '/api/v1/teams/' + this.get('team_id') + '/projects';
  },
  
  relations: [{
    type: Backbone.Many,//nature of the relation
    key: 'todos', //attribute of Project
    collectionType: Pagoda.collections.Todos,
    relatedModel: Pagoda.models.Todo //AssociatedModel for attribute key
  },
  {
    type: Backbone.Many,//nature of the relation
    key: 'users', //attribute of Project
    collectionType: Pagoda.collections.Users,
    relatedModel: Pagoda.models.User //AssociatedModel for attribute key
  }
  ]
  
})