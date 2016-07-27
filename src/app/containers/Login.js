class Login {
  /** @ngInject */
  constructor(auth, $state, usuarioService) {
    this.authService = auth;
    this.stateService = $state;
    this.usuarioService = usuarioService;
  }

  login(email, password) {
    this.authService.loginWithEmailPassword(email, password).then(() => {
      this.stateService.go('app');
    });
  }

  loginComGoogle() {
    this.authService.loginWithGoogle().then(service => {
      let usuario = this.usuarioService.get(service.uid);
      usuario.nome = service.displayName;
      usuario.email = service.email;
      usuario.foto = service.photoURL;
      usuario.$save();
      this.stateService.go('app');
    });
  }
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/containers/Login.html',
    controller: Login
  });