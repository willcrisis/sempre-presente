class UsuarioService {

  /** @ngInject */
  constructor($firebaseArray, $firebaseObject, auth) {
    let ref = firebase.database().ref().child('usuarios');
    this.usuarios = $firebaseArray(ref);
    this.firebaseObjectService = $firebaseObject;
    this.authService = auth;
  }

  list() {
    return this.usuarios;
  }

  get(id) {
    if (!id) {
      id = this.authService.uid;
    }
    let ref = firebase.database().ref().child('usuarios').child(id);
    return this.firebaseObjectService(ref);
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