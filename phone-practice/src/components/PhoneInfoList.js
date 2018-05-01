import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  render() {
    const { info, onRemove, onEdit } = this.props;
    const list = info.map(item => (
      <PhoneInfo
        id={item.id}
        name={item.name}
        phone={item.phone}
        key={item.id}
        onRemove={onRemove}
        editing={item.editing}
        onEdit={onEdit}
      />
    ));

    return <div>{list}</div>;
  }
}
export default PhoneInfoList;
