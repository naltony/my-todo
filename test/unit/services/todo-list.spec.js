describe('TodoList Service', () => {
  let TodoList;

  beforeEach(angular.mock.module('MyTodo.services'));

  beforeEach(angular.mock.inject((_TodoList_) => {
    TodoList = _TodoList_;
  }));

  it('should be true', () => {
    expect(TodoList).toBeDefined();
  });
});
