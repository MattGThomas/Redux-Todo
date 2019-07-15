import { ADD_TODO } from './actions'

const initialState = {
    todos: [
        {
            description: 'take out trash',
            completed: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = { description: action.payload, completed: false};
            return {
                ...state, 
                todos: [...state.todos, newTodo]
            }
        default: 
            return state
    }
}

export default todos