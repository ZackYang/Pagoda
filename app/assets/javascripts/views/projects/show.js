namespace('Pagoda.views.projects')

Pagoda.views.projects.Show = Backbone.Marionette.LayoutView.extend({

  template: HandlebarsTemplates["projects/show"],
  
  className: 'project-detail',
  
  events: {
    'click .new-todo-button' : 'showNewForm',
    'click #cancel-button'   : 'hideNewForm',
    'submit #new-todo-form'  : 'createTodo'
  },
  
  initialize: function() {
    this.viewName = this.model.get('name');
  },
  
  regions: function(options){
    return {
      todosRegion: '#todo-list'
    };
  },
  
  onRender: function() {
    this.todosRegion.show(new Pagoda.views.todos.Index({ collection: this.model.get('todos') }));
  },
  
  onShow: function() {
    this.showUserForm();
  },
  
  showNewForm: function(e) {
    $el = $(e.currentTarget);
    $el.hide();
    $('#new-todo-form').show();
  },
  
  hideNewForm: function(e) {
    $('#new-todo-form').find("input[type=text], input[type=hidden], textarea").val("");
    $('#new-todo-form').hide();
    $('.new-todo-button').show();
    $('.new-todo-form-user').html('没有指派')
  },
  
  createTodo: function(e) {
    self = this
    e && e.preventDefault();
    $form = $(e.currentTarget);
    paramsArray = $form.serializeArray();
    data = _.arrayToObject(paramsArray);
    data['project_id'] = this.model.id;
    newTodo = new Pagoda.models.Todo(data);
    self.model.get('todos').push(newTodo);
    newTodo.save(null, {
      success: function() {
        self.hideNewForm();
      }
    });

  },
  
  setUserState: function(e) {
    $el = $(e.currentTarget);
    $form = $el.parents('form');
    userId = $form.find('select.user-id').val();
    estimate = $form.find('input.datepicker').val();
    user = this.model.get('users').findWhere({ id: parseInt(userId) });
    text = (user ? (user.get('nickname') + " ") : '没有指派 ') + (estimate || '没有截止时间');
    $form.find('.new-todo-form-user').html(text);
  },
  
  showUserForm: function() {
    $el = $('.new-todo-form-user');
    $form = $('#new-todo-form');
    self = this
    
    $el.popover({
      html: true,
      content: function() {
        data = self.serializeData();
        userId = $form.find('input[name=user_id]').val();
        _.each(data.users, function(user) {
          if (user.id == parseInt(userId)) {
            user.selected = 'selected'
          }
        })
        data['estimate'] = $form.find('input[name=estimate]').val();
        
        $html = $(HandlebarsTemplates['projects/user_form'](data));
        $html.find('input.datepicker').datepicker({
          format: "yyyy-mm-dd",
          startDate: "2014/11/1",
          todayBtn: "linked",
          language: "zh-CN",
          autoclose: true
        });
        
        $html.on('change', 'input.datepicker', function(e) {
          $input = $(e.currentTarget);
          $form.find('input[name=estimate]').val($input.val());
          self.setUserState(e);
        });

        $html.on('change', 'select.user-id', function(e) {
          $input = $(e.currentTarget);
          $form.find('input[name=user_id]').val($input.val());
          self.setUserState(e);
        });
        
        return $html;
      }
    });
  }

});