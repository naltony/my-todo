import angular from 'angular';

import { TodoListService } from './todo-list.service';
import { TodoListComponent } from './todo-list.component';
import { TDItemsComponent } from './td-items/td-items.component';
import { TDInputComponent } from './td-input/td-input.component';

export default angular.module('MyTodo.todoList', [])
    .service('TodoListService', TodoListService)

    .component('todoList', TodoListComponent)
    .component('tdItems', TDItemsComponent)
    .component('tdInput', TDInputComponent);
