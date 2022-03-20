import React, { Component } from "react";

class Profile extends Component {
  state = { count: 0, imageUrl: "" };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.getCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Profile;
