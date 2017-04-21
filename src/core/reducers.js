import {ADD_TASK, HELLO_ADD_NAME, REMOVE_TASK} from './actions'

// --------------------------------------------------------------------
// TodoComponent Reducer
// --------------------------------------------------------------------

const todos = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TASK :
      return [
        ...state,
        {text: action.text}
      ];
    case REMOVE_TASK :
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return [...state]
  }
};

// --------------------------------------------------------------------
// Default Reducer
// --------------------------------------------------------------------

const theDefaultReducer = (state = initialState, action) => {
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

const initialState = {
  todos :['example1' , 'example2'],
  name  : 'Zoe'
};

export default {default:theDefaultReducer};
