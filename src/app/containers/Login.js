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
      this.salvarUsuario(service);
      this.stateService.go('app');
    });
  }

  salvarUsuario(service) {
    this.usuarioService.get(service.uid).$loaded().then(usuario => {
      usuario.nome = service.displayName;
      usuario.email = service.email;
      usuario.foto = service.photoURL || 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Mi45IDQ4Mi45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIuOSA0ODIuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPjxwYXRoIGQ9Ik0yMzkuNywyNjAuMmMwLjUsMCwxLDAsMS42LDBjMC4yLDAsMC40LDAsMC42LDBjMC4zLDAsMC43LDAsMSwwYzI5LjMtMC41LDUzLTEwLjgsNzAuNS0zMC41YzM4LjUtNDMuNCwzMi4xLTExNy44LDMxLjQtMTI0LjljLTIuNS01My4zLTI3LjctNzguOC00OC41LTkwLjdDMjgwLjgsNS4yLDI2Mi43LDAuNCwyNDIuNSwwaC0wLjdjLTAuMSwwLTAuMywwLTAuNCwwaC0wLjZjLTExLjEsMC0zMi45LDEuOC01My44LDEzLjdjLTIxLDExLjktNDYuNiwzNy40LTQ5LjEsOTEuMWMtMC43LDcuMS03LjEsODEuNSwzMS40LDEyNC45QzE4Ni43LDI0OS40LDIxMC40LDI1OS43LDIzOS43LDI2MC4yeiBNMTY0LjYsMTA3LjNjMC0wLjMsMC4xLTAuNiwwLjEtMC44YzMuMy03MS43LDU0LjItNzkuNCw3Ni03OS40aDAuNGMwLjIsMCwwLjUsMCwwLjgsMGMyNywwLjYsNzIuOSwxMS42LDc2LDc5LjRjMCwwLjMsMCwwLjYsMC4xLDAuOGMwLjEsMC43LDcuMSw2OC43LTI0LjcsMTA0LjVjLTEyLjYsMTQuMi0yOS40LDIxLjItNTEuNSwyMS40Yy0wLjIsMC0wLjMsMC0wLjUsMGwwLDBjLTAuMiwwLTAuMywwLTAuNSwwYy0yMi0wLjItMzguOS03LjItNTEuNC0yMS40QzE1Ny43LDE3Ni4yLDE2NC41LDEwNy45LDE2NC42LDEwNy4zeiIvPjxwYXRoIGQ9Ik00NDYuOCwzODMuNmMwLTAuMSwwLTAuMiwwLTAuM2MwLTAuOC0wLjEtMS42LTAuMS0yLjVjLTAuNi0xOS44LTEuOS02Ni4xLTQ1LjMtODAuOWMtMC4zLTAuMS0wLjctMC4yLTEtMC4zYy00NS4xLTExLjUtODIuNi0zNy41LTgzLTM3LjhjLTYuMS00LjMtMTQuNS0yLjgtMTguOCwzLjNjLTQuMyw2LjEtMi44LDE0LjUsMy4zLDE4LjhjMS43LDEuMiw0MS41LDI4LjksOTEuMyw0MS43YzIzLjMsOC4zLDI1LjksMzMuMiwyNi42LDU2YzAsMC45LDAsMS43LDAuMSwyLjVjMC4xLDktMC41LDIyLjktMi4xLDMwLjljLTE2LjIsOS4yLTc5LjcsNDEtMTc2LjMsNDFjLTk2LjIsMC0xNjAuMS0zMS45LTE3Ni40LTQxLjFjLTEuNi04LTIuMy0yMS45LTIuMS0zMC45YzAtMC44LDAuMS0xLjYsMC4xLTIuNWMwLjctMjIuOCwzLjMtNDcuNywyNi42LTU2YzQ5LjgtMTIuOCw4OS42LTQwLjYsOTEuMy00MS43YzYuMS00LjMsNy42LTEyLjcsMy4zLTE4LjhjLTQuMy02LjEtMTIuNy03LjYtMTguOC0zLjNjLTAuNCwwLjMtMzcuNywyNi4zLTgzLDM3LjhjLTAuNCwwLjEtMC43LDAuMi0xLDAuM2MtNDMuNCwxNC45LTQ0LjcsNjEuMi00NS4zLDgwLjljMCwwLjksMCwxLjctMC4xLDIuNWMwLDAuMSwwLDAuMiwwLDAuM2MtMC4xLDUuMi0wLjIsMzEuOSw1LjEsNDUuM2MxLDIuNiwyLjgsNC44LDUuMiw2LjNjMywyLDc0LjksNDcuOCwxOTUuMiw0Ny44czE5Mi4yLTQ1LjksMTk1LjItNDcuOGMyLjMtMS41LDQuMi0zLjcsNS4yLTYuM0M0NDcsNDE1LjUsNDQ2LjksMzg4LjgsNDQ2LjgsMzgzLjZ6Ii8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=';
      if (usuario.permissoes) {
        service.roles = [];
        for (const key in usuario.permissoes) {
          if (usuario.permissoes.hasOwnProperty(key)) {
            service.roles.push(key);
          }
        }
      }
      usuario.$save();
    });
  }
}

angular
  .module('app')
  .component('login', {
    templateUrl: 'app/containers/Login.html',
    controller: Login
  });
