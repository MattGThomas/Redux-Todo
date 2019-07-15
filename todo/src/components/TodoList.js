import React from 'react'
import { connect } from 'react-redux'

import { addNewTodo } from '../actions'

class TodoList extends React.Component {
    state = {
        todo: {
            description: ''
        }
    }
    inputChanges = e => {
        this.setState({
            todo: {
                description: e.target.value
            }
        })
    }
    addTodo = e => {
        e.preventDefault()
        const newTodo = this.state.todo.description
        this.props.addNewTodo(newTodo)
        this.setState({
            todo: ''
        })
    }
    
    render(){
        return (
            <div>
                <h2>List:</h2>
                {this.props.todos.map((todo) => (
                    <p>{todo.description}</p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(
    mapStateToProps, 
    { addNewTodo }
)(TodoList)