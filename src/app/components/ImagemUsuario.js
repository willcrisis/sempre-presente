class ImagemUsuario {
  /** @ngInject **/
  constructor(auth) {
    this.urlImagem = this.usuario ? this.usuario.foto : auth.photoURL;
    this.tamanho = this.tamanho || 20;
  }
}

angular
  .module('app')
  .component('imagemUsuario', {
    templateUrl: 'app/components/ImagemUsuario.html',
    controller: ImagemUsuario,
    bindings: {
      tamanho: '<',
      usuario: '<'
    }
  });
