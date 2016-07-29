class Professor {
  /** @ngInject */
  constructor($state, professorService) {
    this.stateService = $state;
    this.professorService = professorService;
    professorService.listNotProfessores().then(lista => {
      this.usuarios = lista;
    });
  }

  save(id) {
    this.professorService.add(id);
    this.stateService.go('professores');
  }
}

angular
  .module('app')
  .component('professor', {
    templateUrl: 'app/containers/Professor.html',
    controller: Professor
  });
