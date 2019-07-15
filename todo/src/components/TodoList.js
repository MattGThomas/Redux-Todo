import React from 'react'
import { connect } from 'react-redux'

import { addNewTodo, toggleTodo } from '../actions'

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
    toggleTodo = (e, index) => {
        e.preventDefault()
        this.props.toggleTodo(index)
    }
    
    render(){
        return (
            <div>
                <div>
                    <form onSubmit={this.addTodo}>
                        <input
                            placeholder='enter new item here'
                            type='text'
                            value={this.state.todo.description}
                            onChange={this.inputChanges}
                        />
                    </form>
                </div>
                <h2>List:</h2>
                {this.props.todos.map((todo, index) => (
                    <li key={index} onClick={e => this.toggleTodo(e, index)}>{todo.description}</li>
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
    { addNewTodo, toggleTodo }
)(TodoList)