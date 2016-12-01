class tdItemsController {

  // @ngInject
  constructor($log, $element, TodoListService) {
    $log.log($element);
    this.TodoListService = TodoListService;
    console.log(this.TodoListService.getList());
  }

}

export const TDItemsComponent = {
  bindings: {},
  template: `<div>TDItemsComponent Component</div>
            <span ng-repeat="todo in tdItems.TodoListService.getList()">
                <li>{{todo.title}}</li>
            </span>`,
  controller: tdItemsController,
  controllerAs: 'tdItems'
};
