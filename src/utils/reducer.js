const initialState = {
  isButtonActive: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BUTTON_ACTIVE':
      return {
        ...state,
        isButtonActive: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;