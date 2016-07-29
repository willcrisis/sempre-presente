class UsuarioService {

  /** @ngInject */
  constructor($firebaseArray, $firebaseObject, auth, dataService) {
    this.usuarios = $firebaseArray(dataService.usuarios);
    this.firebaseObjectService = $firebaseObject;
    this.authService = auth;
    this.dataService = dataService;
  }

  list() {
    return this.usuarios;
  }

  get(id) {
    if (!id) {
      id = this.authService.uid;
    }
    return this.firebaseObjectService(this.dataService.usuarios.child(id));
  }

  add(usuario) {
    this.usuarios.$add(usuario);
    return this.list();
  }

  edit(usuario) {
    this.usuarios.$save(usuario);
    return this.list();
  }

  remove(usuario) {
    this.usuarios.$remove(usuario);
    return this.list();
  }
}

angular
  .module('app')
  .service('usuarioService', UsuarioService);
