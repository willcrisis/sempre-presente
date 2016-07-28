class AulaService {

  /** @ngInject */
  constructor($firebaseArray) {
    this.aulas = $firebaseArray(firebase.database().ref().child('aulas'));
  }

  list() {
    return this.aulas;
  }

  get(id) {
    const encontrado = this.aulas.$getRecord(id);
    if (encontrado) {
      encontrado.data = convertNumberToDate(encontrado.data);
    }
    return encontrado;
  }

  add(aula) {
    aula.data = aula.data.getTime();
    this.aulas.$add(aluno);
    return this.list();
  }

  edit(aula) {
    aula.data = aula.data.getTime();
    this.aulas.$save(aula);
    return this.list();
  }
}

angular
  .module('app')
  .service('aulaService', AulaService);
