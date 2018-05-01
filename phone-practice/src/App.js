import React, { Component } from "react";
import PhoneBookTemplate from "./components/PhoneBookTemplate";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
import "./App.css";

class App extends Component {
  id = 2;
  state = {
    info: [
      { id: 0, name: "구양하", phone: "010-7310-9708"},
      { id: 1, name: "하양구", phone: "010-1116-8444"}
    ],
    keyword: ""
  };

  handleCreate = qwer => {
    const { info } = this.state;
    this.setState({
      info: info.concat({
        id: this.id++,
        name: qwer.name,
        phone: qwer.phone
        
      })
    });
  };

  handleRemove = id => {
    const { info } = this.state;
    this.setState({
      info: info.filter(item => item.id !== id)
    });
  };

  handleKeyword = (e) => {
      this.setState({
      keyword : e.target.value
    })
  } 

  //얘는 그럼 info안의 toggle을 바꿔줘야함

  handleEdit = (id, data) => {
    const { info } = this.state;
    this.setState({
      info: info.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 렌더링
      )
    })
  }




  render() {
      const {info, keyword} = this.state
      const changedList = info.filter(item => 
        item.name.indexOf(keyword) !== -1
      )

    return (
      <PhoneBookTemplate
        input={<PhoneForm onCreate={this.handleCreate} onSearch={this.handleKeyword} keyword={this.state.keyword}/>}
        list={
          <PhoneInfoList info={changedList} onRemove={this.handleRemove} onEdit ={this.handleEdit}/>
        }
      >
      </PhoneBookTemplate>
    );
  }
}
export default App;
