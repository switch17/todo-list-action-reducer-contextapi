import { ADD_TODO, REMOVE_TODO } from "./action.types";

// providing a reducer/method based on the action that is being called 

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      // adding todo to the state
      return [...state, action.payload]; //load all values of the state
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload); //carry forward all the items that doesn't match the item to be deleted
    default:
      return state;
  }
};


// Actions are sent with dispatch