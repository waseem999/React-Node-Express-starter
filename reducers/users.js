const ADD_USER= 'ADD_USER';

const initialState = {
  users: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: 
       return Object.assign({}, state, { users: action.users});
    default: 
       return state;
  }
}