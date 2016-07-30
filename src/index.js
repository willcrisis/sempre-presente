angular
  .module('app', ['ui.router', 'willcrisis.angular-auth', 'firebase', 'angular-growl'])
  .config(AppConfig)
  .run(AppRun);

function convertNumberToDate(number) {
  return new Date(number);
}

/** @ngInject */
function AppConfig(growlProvider) {
  growlProvider.globalTimeToLive(5000);
  growlProvider.globalDisableCountDown(true);
}

/** @ngInject */
function AppRun(authConf, $state, growl, auth, usuarioService) {
  authConf.setRolesSupport(true);
  authConf.setFunctionIfDenied(() => {
    growl.warning('Você não possui permissão para ver esta página.');
    $state.go('app');
  });

  console.log(auth);
  if (auth.loggedIn) {
    usuarioService.get(auth.uid).$loaded().then(usuario => {
      console.log(usuario);
      if (usuario.permissoes) {
        auth.roles = [];
        for (var key in usuario.permissoes) {
          auth.roles.push(key);
        }
      }
    });
  }
}
