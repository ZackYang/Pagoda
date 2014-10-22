namespace('Pagoda.models')

Pagoda.models.Project = Backbone.AssociatedModel.extend({
  
  relations: [{
    type: Backbone.Many,//nature of the relation
    key: 'todos', //attribute of Project
    collectionType: Pagoda.collections.todos,
    relatedModel: Pagoda.models.Todo //AssociatedModel for attribute key
  }]
  
})