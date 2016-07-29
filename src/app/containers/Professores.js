class Professores {
  /** @ngInject */
  constructor(professorService) {
    this.professores = professorService.list();
  }
}

angular
  .module('app')
  .component('professores', {
    templateUrl: 'app/containers/Professores.html',
    controller: Professores
  });
