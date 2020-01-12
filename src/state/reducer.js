import types from './types';

const reducer = (state, action) => {
  switch (action.type) {
  case types.SET_USER:
    return {
      ...state,
      user: action.payload,
    };
  case types.SET_TOKEN:
    return {
      ...state,
      token: action.payload,
    };
  case types.CLEAR_TOKEN:
    return {
      ...state,
      token: null,
    };
  case types.CLEAR_USER:
    return {
      ...state,
      user: null,
    };
  default:
    return state;
  }
};

export default reducer;
