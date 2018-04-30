import React, { Component } from 'react';
import logo from './logo.svg';
import PhoneForm from './component/PhoneForm'
import PhoneInfoList from './component/PhoneInfoList'
import './App.css';

class App extends Component {
 
  id = 2;
 
  state = {
    information : [
      {
        id : 0,
        name : '안수경',
        phone : '010-7666-8049'
      },
      {
        id : 1,
        name : '구양하',
        phone : '010-7310-9708'
      }
    ]
  }
  

  handleCreate = (data) =>  {
    const {information} = this.state
    this.setState({
      information : information.concat({id : this.id++, ...data})
    }) 
  }


  
  render() {
    const { information } = this.state
    return (
      <div className="App">
        <PhoneForm onCreate ={this.handleCreate}/> 
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}


export default App;