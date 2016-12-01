import { ListItemObj } from './item';

export class TodoListService {

  // @ngInject
  constructor($log) {
    this.$log = $log;
    this.message = 'TodoList';

    this.todoList = [
        new ListItemObj('todo1'),
        new ListItemObj('todo2'),
        new ListItemObj('todo11'),
        new ListItemObj('todo3')
    ];
  }

  getList() {
      return this.todoList;
  }

  add(title) {
    this.todoList.push(new ListItemObj(title));
    console.log('Updated todoList', this.todoList);
  }
}
