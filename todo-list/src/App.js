import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';


//const colors = ['#343a40', '#f03e3e', '#12b886', 'green'];

class App extends Component {
  

  colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'] 
  id=2
  state={
    input : '',
    todos : [
      {id : 0, text : "미금역", checked : false},
      {id : 1, text : "정자역", checked : false}
    ],
    color : '#343a40'
}
  
  
  handleCreate = () => {
    const {input, todos,color} = this.state
    
    this.setState({
      input : '',
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false,
        color   
      })       
    })
  } 

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    })
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  //checked를 바꾸면됨
  handleToggle = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(a => a.id ===id)
    const selected = todos[index]
    const nextTodos = [...todos]
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    }

    this.setState({
      todos : nextTodos
    })
  }

  
  
  handleRemove = (id) => {
    const {todos} =this.state
    this.setState({
      todos : todos.filter(item => (item.id !== id))
    })

  }

  handleColor = (color)=>{
    this.setState({
      color
    })
  }



  
  render(){
    const {input, todos} = this.state

    
    return (
      <TodoListTemplate form={<Form value={input} onChange={this.handleChange} onCreate={this.handleCreate} onKeyPress={this.handleKeyPress} color={this.state.color}/>}
                        palette={<Palette colors={this.colors} selected={this.state.color} onSelect={this.handleColor}/>}>
          <TodoItemList todos={this.state.todos} onRemove={this.handleRemove} onToggle={this.handleToggle}/>
      </TodoListTemplate>
    )
  }
}

export default App;
