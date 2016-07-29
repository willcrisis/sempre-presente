class LabeledTextarea {
}

angular
  .module('app')
  .component('labeledTextarea', {
    templateUrl: 'app/components/LabeledTextarea.html',
    controller: LabeledTextarea,
    bindings: {
      label: '@',
      name: '@',
      ngModel: '=',
      ngRequired: '=?',
      ngReadonly: '=?',
      ngDisabled: '=?'
    }
  });
