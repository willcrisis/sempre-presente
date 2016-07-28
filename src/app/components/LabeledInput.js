class LabeledInput {
  constructor() {
    this.type = this.type || 'text';
  }
}

angular
  .module('app')
  .component('labeledInput', {
    templateUrl: 'app/components/LabeledInput.html',
    controller: LabeledInput,
    bindings: {
      label: '@',
      name: '@',
      type: '@',
      ngModel: '=',
      ngRequired: '=?',
      ngReadonly: '=?',
      ngDisabled: '=?'
    }
  });
