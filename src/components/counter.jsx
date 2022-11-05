import React, { Component } from "react";

class Counter extends Component {
  state = {

  };
  render() {
    return (
      <div className="mb-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary" onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button
          className="btn btn-danger ml-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
