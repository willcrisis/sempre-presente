class AlunoService {

  /** @ngInject */
  constructor($firebaseArray) {
    let ref = firebase.database().ref().child('alunos');
    this.alunos = $firebaseArray(ref);
  }

  listAlunos() {
    return this.alunos;
  }

  getAluno(id) {
    let encontrado = this.alunos.$getRecord(id);
    encontrado ? encontrado.dataNascimento = convertNumberToDate(encontrado.dataNascimento) : null;
    return encontrado;
  }

  addAluno(aluno) {
    aluno.dataNascimento = aluno.dataNascimento.getTime();
    this.alunos.$add(aluno);
    return this.listAlunos();
  }

  editAluno(aluno) {
    aluno.dataNascimento = aluno.dataNascimento.getTime();
    this.alunos.$save(aluno);
    return this.listAlunos();
  }

  deleteAluno(aluno) {
    this.alunos.$remove(aluno);
    return this.listAlunos();
  }
}

angular
  .module('app')
  .service('alunoService', AlunoService);