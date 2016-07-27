angular
  .module('app', ['ui.router', 'willcrisis.angular-auth', 'firebase'])
  .service('todoService', TodoService);

function convertNumberToDate(number) {
  return new Date(number);
}