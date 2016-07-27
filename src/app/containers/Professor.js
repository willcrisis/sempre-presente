class Professor {
  /** @ngInject */
  constructor($state, professorService, usuarioService) {
    this.stateService = $state;
    this.professorService = professorService;
    this.usuarios = [];
    usuarioService.list().forEach(usuario => {
      if (this.professorService.list().indexOf(usuario.uid) == -1) {
        this.usuarios.push(usuario)
      }
    })
  }

  save(aluno) {
    if (aluno.$id) {
      this.alunoService.editAluno(aluno);
    } else {
      this.alunoService.addAluno(aluno);
    }
    this.stateService.go('professores');
  }
}

angular
  .module('app')
  .component('professor', {
    templateUrl: 'app/containers/Professor.html',
    controller: Professor
  });