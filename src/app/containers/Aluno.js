class Aluno {
  /** @ngInject */
  constructor($state, alunoService) {
    this.stateService = $state;
    this.alunoService = alunoService;
    this.aluno = this.id ? this.alunoService.getAluno(this.id) : {};
  }

  save(aluno) {
    if (aluno.$id) {
      this.alunoService.editAluno(aluno);
    } else {
      this.alunoService.addAluno(aluno);
    }
    this.stateService.go('alunos');
  }
}

angular
  .module('app')
  .component('aluno', {
    templateUrl: 'app/containers/Aluno.html',
    controller: Aluno,
    bindings: {
      id: '<'
    }
  });