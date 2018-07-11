import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm'
import PhoneInfoList from './component/PhoneInfoList'
import './App.css';

class App extends Component {
     
    id = 2
    state = {
      information: [
        {
          id: 0,
          name: '구양하',
          phone: '010-0000-0000'
        },
        {
          id: 1,
          name: '하양구',
          phone: '010-0000-0001'
        }
      ],
      keyword: ''
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleCreate = (data) => {
      const { information } = this.state;
      this.setState({
        information: information.concat({ id: this.id++, ...data })
      })
    }

    handleRemove = (id) => {
      const { information } = this.state;
      this.setState({
        information: information.filter(info => info.id !== id)
      })
    }
    handleUpdate = (id, data) => {
      const { information } = this.state;
      this.setState({
        information: information.map(
          info => id === info.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 렌더링
        )
      })
    }

    render() {
    const { information, keyword } = this.state
    
    const filteredList = information.filter(item => 
      item.name.indexOf(keyword) !== -1
    )

    return (
      <div className="App">
        <PhoneForm onCreate ={this.handleCreate}/>
        <p>
          <input placeholder="검색할 이름을 입력하세요"
          onChange={this.handleChange} 
          value={keyword}
          name = "keyword" />
          </p>
          <hr/>
        <PhoneInfoList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default App;
