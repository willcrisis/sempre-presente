class ProfessorService {
  /** @ngInject */
  constructor($firebaseArray, dataService, $firebaseObject, usuarioService) {
    this.dataService = dataService;
    const professores = new firebase.util.NormalizedCollection(
      dataService.professores,
      dataService.usuarios
    );
    professores.select('usuarios.nome', 'usuarios.foto', 'usuarios.email');
    this.professores = $firebaseArray(professores.ref());
    this.firebaseObjectService = $firebaseObject;
    this.usuarios = usuarioService.list();
  }

  get(id) {
    return this.firebaseObjectService(this.dataService.professores.child(id));
  }

  list() {
    return this.professores;
  }

  listNotProfessores() {
    return this.professores.$loaded().then(professores => {
      return this.usuarios.$loaded().then(usuarios => {
        const lista = [];

        usuarios.forEach(usuario => {
          const existente = professores.find(professor => {
            return usuario.$id === professor.$id;
          });
          if (!existente) {
            lista.push(usuario);
          }
        });

        return lista;
      });
    });
  }

  add(id) {
    const professor = this.get(id);
    professor.$value = true;
    professor.$save();
    return this.list();
  }

  remove(id) {
    const professor = this.get(id);
    professor.$remove();
    return this.list();
  }
}

angular
  .module('app')
  .service('professorService', ProfessorService);
