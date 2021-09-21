const ThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_THEME_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "SET_COLOR_MODE":
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

export default ThemeReducer;
