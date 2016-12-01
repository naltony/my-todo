class todoListController {

  // @ngInject
  constructor($log, $element) {
    $log.log($element);
  }
}

export const TodoListComponent = {
  bindings: {},
  templateUrl: '/todoList/todo-list.html',
  controller: todoListController,
  controllerAs: 'todoList'
};
