const setThemeMode = (payload) => {
  return {
    type: "SET_THEME_MODE",
    payload,
  };
};
const setColorMode = (payload) => {
  return {
    type: "SET_COLOR_MODE",
    payload,
  };
};

const getTheme = () => {
  return {
    type: "GET_THEME",
  };
};

const exportDefaults = {
  setThemeMode,
  setColorMode,
  getTheme,
};
export default exportDefaults;
