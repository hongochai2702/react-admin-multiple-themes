import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeActions";
import Routes from "../Routes";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";

const Layout = () => {
  const dispatch = useDispatch();

  const themeSelector = useSelector((state) => state.ThemeReducers);
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-color-blue");
    dispatch(ThemeAction.setThemeMode(themeClass));
    dispatch(ThemeAction.setColorMode(colorClass));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div
            className={`layout ${themeSelector.mode} ${themeSelector.color}`}
          >
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
