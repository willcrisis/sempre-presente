class Professores {
  /** @ngInject */
  constructor(professorService, usuarioService) {
    this.professorService = professorService;
    this.professores = [];
    this.professorService.list().$loaded().then(lista => {
      lista.forEach(professor => {
        this.professores.push(usuarioService.get(professor.$value));
      });
    });
  }
}

angular
  .module('app')
  .component('professores', {
    templateUrl: 'app/containers/Professores.html',
    controller: Professores
  });
