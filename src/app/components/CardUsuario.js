class CardUsuario {
  constructor() {
    this.tamanho = this.tamanho || 12;
  }
}

angular
  .module('app')
  .component('cardUsuario', {
    templateUrl: 'app/components/CardUsuario.html',
    controller: CardUsuario,
    bindings: {
      usuario: '<',
      tamanho: '@'
    }
  });
