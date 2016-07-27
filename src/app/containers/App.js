class App {
  /** @ngInject */
  constructor($firebaseArray) {
    let ref = firebase.database().ref().child('todos');
    this.todos = $firebaseArray(ref);
    this.filter = SHOW_ALL;
  }
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });
