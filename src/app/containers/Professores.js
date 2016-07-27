class Professores {
  /** @ngInject */
  constructor(professorService, usuarioService) {
    this.professorService = professorService;
    this.professores = [];
    this.professorService.list().forEach(professor => {
      this.professores.push(usuarioService.get(professor));
    });
  }
}

angular
  .module('app')
  .component('professores', {
    templateUrl: 'app/containers/Professores.html',
    controller: Professores
  });