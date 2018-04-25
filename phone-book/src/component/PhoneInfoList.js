import React, {Component } from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component{
    static defaultProps ={
        data : [],
        onRemove:  () => console.log('onRemove not defined'),
        onUpdate:  () => console.log('onUpdate not defined')
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }

    render(){
        console.log("render PhoneInfoList")
        const {data, onRemove, onUpdate} = this.props
        const list = data.map( item => 
            <PhoneInfo info={item} key={item.id} onRemove={onRemove} onUpdate={onUpdate}/> 
        ) 

        return (
                <div>{list}</div>
        )
    }

}
export default PhoneInfoList
