import React, {Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    render(){
        console.log("Todoitem render")
        const {text, id, checked, onToggle, onRemove, color} = this.props
        return (
                <div className="todo-item" onClick={()=>onToggle(id)}>
                                    <div className="remove" onClick={(e) => {
                                        e.stopPropagation()
                                        onRemove(id)
                                    }}>&times;</div>
                

                                    <div className={`todo-text ${checked && 'checked'}`}>
                                        <div style={{color}}>{text}</div>
                                    </div>
                                
                                    { 
                                        checked && (<div className="checked-mark">✓</div>)
                                    }
                                        
                </div>
            )
    }
}
export default TodoItem 