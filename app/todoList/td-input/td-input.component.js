class tdInputController {

  // @ngInject
  constructor($log, $element, TodoListService) {
      this.inputText = '';
      this.TodoListService = TodoListService;
  }

}

export const TDInputComponent = {
  bindings: {},
  template: `<input ng-model="tdInput.inputText">
             <button ng-click="tdInput.TodoListService.add(tdInput.inputText)">Click</button>`,
  controller: tdInputController,
  controllerAs: 'tdInput'
};
