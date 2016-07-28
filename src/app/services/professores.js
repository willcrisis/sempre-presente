class ProfessorService {
  /** @ngInject */
  constructor($firebaseArray) {
    this.professores = $firebaseArray(firebase.database().ref().child('professores'));
  }

  list() {
    return this.professores;
  }

  add(aluno) {
    this.professores.$add(aluno);
    return this.list();
  }

  remove(aluno) {
    this.professores.$remove(aluno);
    return this.list();
  }
}

angular
  .module('app')
  .service('professorService', ProfessorService);
