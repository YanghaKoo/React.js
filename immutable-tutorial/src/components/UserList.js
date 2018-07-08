import React, { Component } from "react";
import User from "./User";

class UserList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.datas !== nextProps.datas;
  }

  render() {
    const { datas } = this.props;
    console.log("userList rendering")
    const list = datas.map(item => {
      return <User name={item.get('name')} key={item.get('id')} />;
    });
    return <div>{list}</div>;
  }
}

export default UserList;
