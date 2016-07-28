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
      this.salvarUsuario(service);
      this.stateService.go('app');
    });
  }

  loginComFacebook() {
    this.authService.loginWithFacebook().then(service => {
      console.log(service);
      this.salvarUsuario(service);
      this.stateService.go('app');
    });
  }

  salvarUsuario(service) {
    const usuario = this.usuarioService.get(service.uid);
    usuario.nome = service.displayName;
    usuario.email = service.email;
    usuario.foto = service.photoURL;
    usuario.$save();
  }
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/containers/Login.html',
    controller: Login
  });
