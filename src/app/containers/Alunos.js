class Alunos {
  /** @ngInject */
  constructor(alunoService) {
    this.alunoService = alunoService;
  }
}

angular
  .module('app')
  .component('alunos', {
    templateUrl: 'app/containers/Alunos.html',
    controller: Alunos
  });
