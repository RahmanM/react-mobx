import React from "react";
import "./styles.css";
import TodoCounter from "./TodoCounter";
import { observer } from "mobx-react";

@observer
class Header extends React.Component {
  filterTodo = e => {
    this.props.store.filter = e.target.value;
  };

  render() {
    return (
      <div className="header">
        <span className="brand">Todo App</span>
        <input
          placeholder="Filter Todo ..."
          type="text"
          onChange={e => this.filterTodo(e)}
        />

        <TodoCounter store={this.props.store} />
      </div>
    );
  }
}

export default Header;
