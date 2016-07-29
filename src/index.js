angular
  .module('app', ['ui.router', 'willcrisis.angular-auth', 'firebase', 'rt.select2', 'ui.bootstrap']);

function convertNumberToDate(number) {
  return new Date(number);
}

