class AulaService {

  /** @ngInject */
  constructor($firebaseArray) {
    let ref = firebase.database().ref().child('aulas');
    this.aulas = $firebaseArray(ref);
  }

  list() {
    return this.aulas;
  }

  get(id) {
    let encontrado = this.aulas.$getRecord(id);
    encontrado ? encontrado.data = convertNumberToDate(encontrado.data) : null;
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
