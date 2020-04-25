import React from "react";
import { observer } from "mobx-react";
import "./styles.css";

@observer
class Todo extends React.Component {
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.props.store.addTodo({
        description: e.target.value,
        completed: false
      });

      e.target.value = "";
    }
  };

  render() {
    return (
      <div className="add-todo">
        <label>Add Todo: </label>
        <input type="textbox" onKeyPress={e => this.onKeyPress(e)} />
      </div>
    );
  }
}

export default Todo;
