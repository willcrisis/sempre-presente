class Card {
  constructor() {
    this.tamanho = this.tamanho || 12;
  }
}

angular
  .module('app')
  .component('card', {
    templateUrl: 'app/components/Card.html',
    controller: Card,
    transclude: true,
    bindings: {
      label: '@',
      state: '@',
      tamanho: '@'
    }
  });
