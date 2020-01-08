import types from './types';

const reducer = (state = {}, action) => {
  if(action.type == types.SET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
};

export default reducer;
