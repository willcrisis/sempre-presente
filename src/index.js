angular
  .module('app', ['ui.router', 'willcrisis.angular-auth', 'firebase']);

function convertNumberToDate(number) {
  return new Date(number);
}
