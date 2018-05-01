import React, { Component } from "react";

class PhoneInfo extends Component {
  
  
  state = {
    editing : false,
    name: '',
    phone: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
};

  handleToggle = () =>{
    this.setState({
      editing : !this.state.editing
    })
  }

  componentDidUpdate(prevProps, prevState){
    const {name, phone, onEdit, id} = this.props
    if(!prevState.editing && this.state.editing){
      this.setState({
        name : name,
        phone : phone
      })
    }
    if(prevState.editing && !this.state.editing){
      onEdit(id, {
        name : this.state.name,
        phone : this.state.phone
      })
    }
  }

  render() {
    const { id, name, phone, onRemove,onEdit } =  this.props;
    const { editing } = this.state
    
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    if(editing) {
      return (
        <div className="info-wrapper" style={style}>
          <div><input value={this.state.name} onChange={this.handleChange} name="name" /></div>
          <div><input value={this.state.phone} onChange={this.handleChange} name="phone" /></div>
          <button onClick={this.handleToggle}> 적용</button>
          <button onClick={() => onRemove(id)}>삭제</button>
          
        </div>
      );
    }

    if (!editing) {
      return (
        <div className="info-wrapper" style={style}>
          <div style={{ color: "blue" }}>{name}</div>
          <div>{phone}</div>
          <button onClick={this.handleToggle}>
            수정
          </button>
          <button onClick={()=>onRemove(id)}>
            삭제
          </button>
        
        </div>
      );
    }
  
  
  }
}
export default PhoneInfo;
