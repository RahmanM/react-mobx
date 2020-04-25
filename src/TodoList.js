import React from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends React.Component {
  render() {
    var todos = this.props.store.filteredTodos.map(t => {
      return (
        <div>
          <li key={t.description}>
            <input
              type="checkbox"
              value={t.completed}
              checked={t.completed}
              onChange={e => {
                t.completed = !t.completed;
              }}
            />{" "}
            {t.description}
          </li>
        </div>
      );
    });

    return (
      <div className="todo-list">
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
