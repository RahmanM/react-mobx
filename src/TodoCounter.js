import React from "react";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class TodoCounter extends React.Component {
  render() {
    return (
      <div className="counter">
        <div>Completed: {this.props.store.totalCompleted}</div>
        <div>Not Completed: {this.props.store.totalNotCompleted}</div>
      </div>
    );
  }
}

export default TodoCounter;
