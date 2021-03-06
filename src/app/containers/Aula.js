class Aula {
  /** @ngInject */
  constructor($state, aulaService, professorService, alunoService) {
    this.stateService = $state;
    this.aulaService = aulaService;
    this.professores = professorService.list();
    this.alunos = alunoService.list();
    this.aula = this.id ? this.aulaService.get(this.id) : {data: new Date(), professores: {}, alunos: {}};
  }

  save(aula) {
    if (aula.$id) {
      this.aulaService.edit(aula);
      this.stateService.go('aulaConsulta', {id: aula.$id});
    } else {
      this.aulaService.add(aula).then(aula => {
        this.stateService.go('aulaConsulta', {id: aula.$id});
      });
    }
  }

  toggle(id) {
    if (this.aula.professores[id] === undefined) {
      this.aula.professores[id] = true;
    } else {
      delete this.aula.professores[id];
    }
  }

  toggleAluno(id) {
    if (this.aula.alunos[id] === undefined) {
      this.aula.alunos[id] = 2;
    } else {
      delete this.aula.alunos[id];
    }
  }

  remove(id) {
    const encontrado = this.aula.professores.find(professor => {
      return professor.$id === id;
    });
    this.professores.push(encontrado);
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
