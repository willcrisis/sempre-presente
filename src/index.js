angular
  .module('app', ['ui.router', 'willcrisis.angular-auth', 'firebase', 'rt.select2', 'ui.bootstrap'])
  .run(inicializador);

function convertNumberToDate(number) {
  return new Date(number);
}

/** @ngInject */
function inicializador(alunoService, aulaService, professorService, usuarioService) {
  const services = {};
  services.alunoService = alunoService;
  services.aulaService = aulaService;
  services.professorService = professorService;
  services.usuarioService = usuarioService;
}
