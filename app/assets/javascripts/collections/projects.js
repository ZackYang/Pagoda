//= require ../models/project

namespace('Pagoda.collections')

Pagoda.collections.Projects = Backbone.Collection.extend({
  model: Pagoda.models.Project
})