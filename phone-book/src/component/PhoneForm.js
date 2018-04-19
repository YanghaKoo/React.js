import React, { Component } from 'react'

class PhoneForm extends Component{
    state= {
        name : '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    handlePhone = (e) =>{
        this.setState({
            phone : e.target.value
        })   
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        console.log(e.target);
        
        this.setState({
            name: '',
            phone: ''
          })
    }



    render(){ 
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" onChange={this.handleChange} name="name" value={this.state.name}/>
                <input placeholder="전화번호" onChange={this.handlePhone} name="phone"value={this.state.phone}/>
                
                <div>{this.state.name} {this.state.phone}</div>        
                <button type="submit">제출</button>
            </form>
        )
    }



}


export default PhoneForm