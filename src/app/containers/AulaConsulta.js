class AulaConsulta {
  /** @ngInject */
  constructor($state, aulaService, usuarioService, alunoService) {
    if (!this.id) {
      throw new Error('AulaConsulta: O id é obrigatório');
    }
    this.stateService = $state;
    this.aulaService = aulaService;
    this.aula = this.aulaService.get(this.id);

    this.alunos = [];
    this.professores = [];

    for (const key in this.aula.professores) {
      if (this.aula.professores.hasOwnProperty(key)) {
        usuarioService.get(key).$loaded().then(usuario => {
          this.professores.push(usuario);
        });
      }
    }
    for (const key in this.aula.alunos) {
      if (this.aula.alunos.hasOwnProperty(key)) {
        const aluno = alunoService.get(key);
        this.alunos.push({$id: key, nome: aluno.nome, moedas: this.aula.alunos[key]});
      }
    }
  }
}

angular
  .module('app')
  .component('aulaConsulta', {
    templateUrl: 'app/containers/AulaConsulta.html',
    controller: AulaConsulta,
    bindings: {
      id: '<'
    }
  });
