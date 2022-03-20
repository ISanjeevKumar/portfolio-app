import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value };
  render() {
    console.log("props Id", this.props.id);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClass()}>{this.getCounter()}</span>
        <button onClick={this.doIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  doIncrement = () => {
    this.setState({ count: this.state.value + 1 });
  };
  getBadgeClass() {
    let className = "badge m-2 badge-";
    return (className += this.state.value === 0 ? "warning" : "primary");
  }

  getCounter() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
