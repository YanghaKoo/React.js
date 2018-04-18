import React, {Component} from 'react'


class MyName extends Component{
    render(){
        return(
            <div>
                내 이름은 {this.props.name}입니다.
            </div>
        )
    }
}

MyName.defaultProps ={
    name: "안수경"
}


export default MyName