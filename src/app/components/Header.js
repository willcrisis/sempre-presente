class Header {
  /** @ngInject */
  constructor(todoService, auth) {
    this.todoService = todoService;
    this.auth = auth;
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, this.todos);
    }
  }
}

angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: Header,
    bindings: {
      todos: '='
    }
  });
