import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
      info : {
        name : '이름',
        phone : '010-0000-0000',
        id: 0
      }
  }

  state = {
    editing : false,
    name : '',
    phone : ''
  }

  // editing 값 반전 시키기
  handleToggleEdit = () => {
    const {editing} = this.state
    this.setState({  editing : !editing    })
  }



  componentDidUpdate(prevProps, prevState){
    const {info, onUpdate} = this.props
    
    //editing 값이 false 에서 true될 때
    if(!prevState.editing && this.state.editing){
      
      this.setState({
        name :info.name,
        phone: info.phone
      })
    }

    //editing 값이 true 에서 false 될 때
    if(prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone:this.state.phone
      })
    }
  }


  handleChange = (e) => {
    const {name, phone, id} = this.props.info;
    
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  hRemove = () =>{
    const {info, onRemove} = this.props
    onRemove(info.id)
  }
  
  shouldComponentUpdate(nextProps, nextState){
    if(!this.state.editing && !nextState.editing && nextProps.info ===this.props.info){
      return false;
    }
    return true;
  }

  render(){
    console.log('render PhoneInfo ' + this.props.info.id);
    const style = {
      border : "1px solid black",
      padding : '8px',
      margin : '8px'
    }
    const {editing} = this.state
    const {name, phone, id} = this.props.info

    if(editing){
      return (
        <div style={style}>
          <div>
            <input value={this.state.name} name="name" placeholder="이름" onChange={this.handleChange}/>
          </div>
          <div>
            <input value={this.state.phone} name="phone" placeholder="전화번호" onChange={this.handleChange}/>
          </div>
          <button onClick ={this.handleToggleEdit}>적용</button>
          <button onClick ={this.hRemove}>삭제</button>      
          </div>
      )
    }

    else {
    return (
      <div style={style}>
        <div>{name}</div>
        <div>{phone}</div>
        <button onClick={this.hRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>수정</button>
      </div>  
    )
  }
  }}

export default PhoneInfo;
