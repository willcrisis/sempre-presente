class Menu {
  /** @ngInject */
  constructor(auth, $state) {
    this.authService = auth;
    this.stateService = $state;
  }

  logout() {
    this.authService.logout().then(() => {
      this.stateService.go('login');
    });
  }
}

angular
  .module('app')
  .component('menu', {
    templateUrl: 'app/components/Menu.html',
    controller: Menu
  });
