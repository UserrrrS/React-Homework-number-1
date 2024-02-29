export const setButtonActive = (isActive) => {
  return {
    type: 'SET_BUTTON_ACTIVE',
    payload: isActive,
  };
};