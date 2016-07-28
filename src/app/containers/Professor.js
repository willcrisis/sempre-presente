class Professor {
  /** @ngInject */
  constructor($state, professorService, usuarioService) {
    this.stateService = $state;
    this.professorService = professorService;
    this.usuarios = [];
    usuarioService.list().$loaded().then(usuarios => {
      this.professorService.list().$loaded().then(lista => {
        usuarios.forEach(usuario => {
          if (lista.map(professor => {
              return professor.$value
            }).indexOf(usuario.$id) == -1) {
            this.usuarios.push(usuario)
          }
        });
      });
    });
  }

  save(id) {
    this.professorService.add(id);
    this.stateService.go('professores');
  }
}

angular
  .module('app')
  .component('professor', {
    templateUrl: 'app/containers/Professor.html',
    controller: Professor
  });
