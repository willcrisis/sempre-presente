class Aulas {
  /** @ngInject */
  constructor(aulaService) {
    this.aulaService = aulaService;
  }
}

angular
  .module('app')
  .component('aulas', {
    templateUrl: 'app/containers/Aulas.html',
    controller: Aulas
  });
