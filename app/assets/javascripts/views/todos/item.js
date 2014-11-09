namespace('Pagoda.views.todos')

Pagoda.views.todos.Item = Marionette.ItemView.extend({

  template: HandlebarsTemplates['todos/item'],
  
  tagName: 'li',
  
  className: function() {
    return (this.model.get('state') == 'completed') ? 'hide' : '';
  },
  
  initialize: function(options) {
    this.model.on('change', this.render, this);
    this.editUserState = false;
    this.editUserName = false;
  },
  
  events: {
    'click .play'          : 'triggerStart',
    'click .pause'         : 'triggerStop',
    'click .remove'        : 'removeItem',
    'click .edit'          : 'editUserNameForm',
    'mouseup .user-state'  : 'editUserStateForm',
    'blur  .set-user-state': 'editUserStateForm',
    'change .user-id'      : 'setUserState',
    'change .estimate'     : 'setUserState',
    'change .todo-name'    : 'setName',
    'mouseup .save-button' : 'saveItem',
    'click .todo-name'     : 'openTodo'
  },
  
  onRender: function() {
    if (this.model.get('state') == 'completed') {
      this.$el.fadeOut();
    }
    
    this.$el.find('.estimate').datepicker({
      format: "yyyy-mm-dd",
      startDate: "2014-11-02",
      todayBtn: "linked",
      language: "zh-CN",
      forceParse: false,
      calendarWeeks: true,
      autoclose: true,
      todayHighlight: true
    });
    
  },
  
  templateHelpers: function() {
    self = this;
    users = mainView.model.get('projects').findWhere({ id: this.model.get('project_id') }).get('users');
    return {
      userState: function() {
        user = null;
        if (users) {
          user = users.findWhere({ id: this['user_id'] });
        }
        return (user ? (user.get('nickname') + " ") : '没有指派 ') + (this.estimate || '没有截止时间');
      },
      
      availableUsers: function() {
        usersOptions = users.toJSON();
        usersOptions = _.map(usersOptions, function(option) {
          if (option.id == self.model.get('user_id')) {
            option.selected = 'selected'
          }
          return option;
        })
        return usersOptions;
      },
      
      isHandling: function() {
        return this.state == 'handling' ? true : false;
      },
      
      isCompleted: function() {
        return this.state == 'completed' ? true : false;
      },
      
      userAvatar: function() {
        user = users.findWhere({ id: this['user_id'] });
        return user ? user.get('avatar') : null;
      },
      
      editUserState: function() {
        return self.editUserState;
      },
      
      editUserName: function() {
        return self.editUserName;
      }
    }
  },
    
  triggerStart: function() {
    this.model.set({ 'user_id' : currentUser.id})
    this.model.fire('start');
  },
  
  triggerStop: function(e) {
    e.preventDefault();
    this.model.fire('stop');
  },
  
  removeItem: function(e) {
    e.preventDefault();
    this.model.destroy();
  },
  
  editUserStateForm: function(e) {
    e && e.preventDefault();
    this.editUserState = !this.editUserState;
    setTimeout(this.render, 100);
  },
  
  editUserNameForm: function(e) {
    e && e.preventDefault();
    this.editUserName = !this.editUserName;
    setTimeout(this.render, 100);
  },
  
  setUserState: function() {
    paramsArray = this.$el.find('form').serializeArray();
    data = _.arrayToObject(paramsArray);
    data['user_id'] = parseInt(data['user_id']);
    this.model.set(data);
    if (this.model.id) {
      this.model.save({ fire: null });
    }
  },
  
  setName: function(e) {
    e && e.preventDefault();
    $target = $(e.currentTarget);
    name = this.$el.find('input.todo-name').val();
    this.model.set({ 'name' : name });
  },
  
  saveItem: function(e) {
    e && e.preventDefault();
    this.editUserName = false;
    this.model.save();
    return null;
  },
  
  openTodo: function(e) {
    e.preventDefault();
    currentView = this;
    this.model.fetch({
      success: function() {
        itemShowView = new Pagoda.views.todos.Show({ model: currentView.model });
        window.mainView.pushView(currentView.parentView, itemShowView, 'teamPanel');
      }
    })
  }
  
})