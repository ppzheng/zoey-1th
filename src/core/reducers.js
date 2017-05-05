import {ADD_TASK, HELLO_ADD_NAME, REMOVE_TASK} from './actions'

// --------------------------------------------------------------------
// TodoComponent Reducer
// --------------------------------------------------------------------

const todosReducer = (state = defaultTodosState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case ADD_TASK :
      return {
        ...state,
        todos: [...state.todos , action.text]
  };
    case REMOVE_TASK :
      let todos = [...state.todos];
      todos.splice(action.index,1);
      return { ...state, todos };
    default:
      return state
  }
};

// --------------------------------------------------------------------
// Default Reducer
// --------------------------------------------------------------------

const theDefaultReducer = (state = defaultInitialState, action) => {
  console.log('theDefaultReducer', state, action);
  switch (action.type) {
    case HELLO_ADD_NAME:
      return {
        ...state, name: action.name
      };

    default:
      return state;
  }
};

// --------------------------------------------------------------------
// Initial
// --------------------------------------------------------------------

const defaultInitialState = {
  name: 'Zoe'
};

const defaultTodosState = {
  todos: ['example1', 'example2'],
};

export default {
  default: theDefaultReducer,
  todos  : todosReducer
};
