// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap

//= require underscore
//= require ./utilities/namespace

//= require backbone
//= require backbone.marionette
//= require handlebars.runtime
//= require handlebars
//= require backbone-associations

//= require_tree ./models
//= require_tree ./collections
//= require_tree ./templates
//= require_tree ./views
//= require_tree ./controllers

//= require main
//= require_self

namespace('Pagoda')

Pagoda.Application = Marionette.Application.extend({
  initialize: function(options) {
    console.log(options.container);
  }
});

/*
Pagoda.on("start", function(options){
  if (Backbone.history){
    Backbone.history.start();
  }
});*/


// Pagoda.addInitializer(function(options){
//   Backbone.history.start();
// });

// var pagoda = new Pagoda({container: '#app'});

