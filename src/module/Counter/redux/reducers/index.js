const initialState = { counter: 0 };

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    default:
      return { ...state };
  }
};
export default reducer;
