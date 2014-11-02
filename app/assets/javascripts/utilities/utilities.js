//= require underscore

_.arrayToObject = function(array){
  data = {};
  _.each(array, function(object) {
    data[object.name] = object.value;
  })
  return data;
}