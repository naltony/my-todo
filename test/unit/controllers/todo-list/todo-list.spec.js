describe('TodoListController', () => {
  let todoListController, createController;

  beforeEach(angular.mock.module('MyTodo.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      todoListController = $controller('TodoListController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(todoListController.message).toMatch('TodoListController');
  });
});
