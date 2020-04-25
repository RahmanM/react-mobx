import { observable, computed } from "mobx";

class TodoStore {
  @observable todos = [
    { description: "todo 1", completed: false },
    { description: "todo 2", completed: true },
    { description: "todo 3", completed: false }
  ];

  @observable filter = "";

  @computed get filteredTodos() {
    var filtered = this.todos.filter(
      t => !this.filter || t.description.indexOf(this.filter) > -1
    );
    return filtered;
  }

  @computed get totalCompleted() {
    var completed = this.todos.filter(t => t.completed === true);
    return completed.length;
  }

  @computed get totalNotCompleted() {
    var notCompleted = this.todos.filter(t => t.completed === false);
    return notCompleted.length;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  // completeTodo(todo, complete) {
  //   console.log(complete);
  //   this.todos.find(
  //     f => f.description === todo.description
  //   ).completed = complete;
  // }
}

var store = new TodoStore();

export default store;
