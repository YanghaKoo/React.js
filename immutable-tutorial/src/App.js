import React, { Component } from "react";
import UserList from "./components/UserList";
import { Map, List } from "immutable";

class App extends Component {
  id = 2;

  // state는 immutable로 생성할 수 없으니,
  // state아래 data 객체를 immutable로 생성하고 거기다가 다 넣어서 관리
  state = {
    data: Map({
     
      text: "",
      users: List([
        Map({
          id: 0,
          name: "구양하"
        }),
        Map({
          id: 1,
          name: "안수경"
        })
      ])
    })
  };

  handleClick = e => {
    const { data } = this.state;

    this.setState({
      data: data
        .set("input", "")
        .update("users", user =>
          user.push(Map({ id: this.id++, name: data.get("text") }))
        )
    });
  };

  handleChange = e => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set("text", value)
    });
  };

  render() {
    //console.log(this.state.toJS())
    const {data} = this.state
    const text = data.get('text')
    const users = data.get('users')

    return (
      <div>
        <input
          type="text"
          value={data.get('text')}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>추가</button>
        <h1>사용자 목록</h1>

        <div>
          <UserList datas={users} />
        </div>
      </div>
    );
  }
}

export default App;
