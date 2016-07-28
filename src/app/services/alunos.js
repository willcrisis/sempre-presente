class AlunoService {

  /** @ngInject */
  constructor($firebaseArray) {
    this.alunos = $firebaseArray(firebase.database().ref().child('alunos'));
  }

  listAlunos() {
    return this.alunos;
  }

  getAluno(id) {
    const encontrado = this.alunos.$getRecord(id);
    if (encontrado) {
      encontrado.dataNascimento = convertNumberToDate(encontrado.dataNascimento);
    }
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
