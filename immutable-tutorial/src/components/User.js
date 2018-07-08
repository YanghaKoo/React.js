import React, { Component } from "react";

class User extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }

  render() {
    const { name} = this.props;
    console.log(name);

    return <div>{name}</div>;
  }
}

export default User;
