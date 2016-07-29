class Aula {
  /** @ngInject */
  constructor($state, aulaService, professorService) {
    this.stateService = $state;
    this.aulaService = aulaService;
    this.professorService = professorService;
    this.aula = this.id ? this.aulaService.get(this.id) : {};
  }

  save(aula) {
    if (aula.$id) {
      this.aulaService.edit(aula);
    } else {
      this.aulaService.add(aula);
    }
    this.stateService.go('aulas');
  }
}

angular
  .module('app')
  .component('aula', {
    templateUrl: 'app/containers/Aula.html',
    controller: Aula,
    bindings: {
      id: '<'
    }
  });
