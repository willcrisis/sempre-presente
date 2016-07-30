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
      auth: ['PROFESSOR', 'ADMIN']
    })
    .state('professores', {
      url: '/professores',
      template: '<professores></professores>',
      auth: ['ADMIN']
    })
    .state('aluno', {
      url: '/aluno/:id',
      controller: AlunoRoute,
      controllerAs: 'ctrl',
      template: '<aluno id="ctrl.id"></aluno>',
      auth: ['PROFESSOR', 'ADMIN']
    })
    .state('professor', {
      url: '/professor',
      template: '<professor></professor>',
      auth: ['ADMIN']
    })
    .state('aulas', {
      url: '/aulas',
      template: '<aulas></aulas>',
      auth: ['PROFESSOR', 'ADMIN']
    })
    .state('aula', {
      url: '/aula/:id',
      controller: AulaRoute,
      controllerAs: 'ctrl',
      template: '<aula id="ctrl.id"></aula>',
      auth: ['PROFESSOR', 'ADMIN']
    })
    .state('login', {
      url: '/login',
      template: '<login></login>',
      auth: false
    });
}
