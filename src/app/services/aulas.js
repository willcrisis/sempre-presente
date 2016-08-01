class AulaService {

  /** @ngInject */
  constructor($firebaseArray, dataService, $firebaseObject) {
    this.aulas = $firebaseArray(dataService.aulas);
    this.firebaseObjectService = $firebaseObject;
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
    return this.aulas.$add(aula).then(aula => {
      return this.firebaseObjectService(aula).$loaded().then(aula => {
        aula.data = convertNumberToDate(aula.data);
        return aula;
      });
    });
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
