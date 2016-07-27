class ProfessorService {
  /** @ngInject */
  constructor($firebaseArray) {
    let ref = firebase.database().ref().child('professores');
    this.professores = $firebaseArray(ref);
  }

  list() {
    return this.professores;
  }

  add(aluno) {
    this.professores.$add(aluno);
    return this.listAlunos();
  }

  remove(aluno) {
    this.professores.$remove(aluno);
    return this.listAlunos();
  }
}


angular
  .module('app')
  .service('professorService', ProfessorService);