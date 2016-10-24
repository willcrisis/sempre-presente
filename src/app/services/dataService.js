class DataService {
  constructor() {
    this.root = firebase.database().ref();
    this.professores = this.root.child('professores');
    this.alunos = this.root.child('alunos').orderByChild('nome');
    this.usuarios = this.root.child('usuarios');
    this.aulas = this.root.child('aulas');
  }
}

angular
  .module('app')
  .service('dataService', DataService);
