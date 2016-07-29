class Aluno {
  /** @ngInject */
  constructor($state, alunoService) {
    this.stateService = $state;
    this.alunoService = alunoService;
    this.aluno = this.id ? this.alunoService.get(this.id) : {};
  }

  save(aluno) {
    if (aluno.$id) {
      this.alunoService.edit(aluno);
    } else {
      this.alunoService.add(aluno);
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
