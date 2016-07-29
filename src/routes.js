class AlunoRoute {
  /** @ngInject */
  constructor($stateParams) {
    this.id = $stateParams.id;
  }
}

class AulaRoute {
  /** @ngInject */
  constructor($stateParams) {
    this.id = $stateParams.id;
  }
}

angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>',
      auth: true
    })
    .state('alunos', {
      url: '/alunos',
      template: '<alunos></alunos>',
      auth: true
    })
    .state('professores', {
      url: '/professores',
      template: '<professores></professores>',
      auth: true
    })
    .state('aluno', {
      url: '/aluno/:id',
      controller: AlunoRoute,
      controllerAs: 'ctrl',
      template: '<aluno id="ctrl.id"></aluno>',
      auth: true
    })
    .state('professor', {
      url: '/professor',
      template: '<professor></professor>',
      auth: true
    })
    .state('aulas', {
      url: '/aulas',
      template: '<aulas></aulas>',
      auth: true
    })
    .state('aula', {
      url: '/aula/:id',
      controller: AulaRoute,
      controllerAs: 'ctrl',
      template: '<aula id="ctrl.id"></aula>',
      auth: true
    })
    .state('login', {
      url: '/login',
      template: '<login></login>',
      auth: false
    });
}
