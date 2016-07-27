class MenuItem {

}

angular
  .module('app')
  .component('menuItem', {
    templateUrl: 'app/components/MenuItem.html',
    controller: MenuItem,
    bindings: {
      label: '@',
      state: '&'
    }
  });