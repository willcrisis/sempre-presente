class AlunoService {

  /** @ngInject */
  constructor($firebaseArray, dataService) {
    this.alunos = $firebaseArray(dataService.alunos);
  }

  list() {
    return this.alunos;
  }

  get(id) {
    const encontrado = this.alunos.$getRecord(id);
    if (encontrado) {
      encontrado.dataNascimento = convertNumberToDate(encontrado.dataNascimento);
    }
    return encontrado;
  }

  add(aluno) {
    aluno.dataNascimento = aluno.dataNascimento.getTime();
    this.alunos.$add(aluno);
    return this.list();
  }

  edit(aluno) {
    aluno.dataNascimento = aluno.dataNascimento.getTime();
    this.alunos.$save(aluno);
    return this.list();
  }

  remove(aluno) {
    this.alunos.$remove(aluno);
    return this.list();
  }
}

angular
  .module('app')
  .service('alunoService', AlunoService);
