// --------------------------------------------------------------------
// TodoComponent
// --------------------------------------------------------------------
export const ADD_TASK    = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

const addTask = (event) => {
  return { type:ADD_TASK, text: event.target.value }
};

let text = 'star';

const removeTask = (index) => {
  return { type:REMOVE_TASK, index}
};


// --------------------------------------------------------------------
// HelloComponent
// --------------------------------------------------------------------

export const HELLO_ADD_NAME = "HELLO_ADD_NAME";

const addName = (event) => {
  if (event.key === 'Enter' ){
    console.log(event.target.value)
  }
  return { type: HELLO_ADD_NAME,name:event.target.value }
};


// --------------------------------------------------------------------
//
// --------------------------------------------------------------------

const actions = {
  addTask,
  addName
};

export { actions }
