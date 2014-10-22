//= require ../collections/users
//= require ../collections/projects

namespace('Pagoda.models')

Pagoda.models.Team = Backbone.AssociatedModel.extend({
  relations: [
  {
    type: Backbone.Many,//nature of the relation
    key: 'users', //attribute of Project
    collectionType: Pagoda.collections.Users,
    relatedModel: Pagoda.models.User //AssociatedModel for attribute key
  },
  {
    type: Backbone.Many,//nature of the relation
    key: 'projects', //attribute of Project
    collectionType: Pagoda.collections.Projects,
    relatedModel: Pagoda.models.Project //AssociatedModel for attribute key
  }
  ]
})