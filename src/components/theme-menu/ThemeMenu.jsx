import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeActions";

import { useToggleDropdown } from "../dropdown/Dropdown";

import "./style.css";

const modeSettings = [
  {
    id: "light",
    name: "Light",
    background: "light-background",
    class: "theme-mode-light",
  },
  {
    id: "dark",
    name: "Dark",
    background: "dark-background",
    class: "theme-mode-dark",
  },
];

const colorSettings = [
  {
    id: "blue",
    name: "Blue",
    background: "blue-color",
    class: "theme-color-blue",
  },
  {
    id: "red",
    name: "Red",
    background: "red-color",
    class: "theme-color-red",
  },
  {
    id: "cyan",
    name: "Cyan",
    background: "cyan-color",
    class: "theme-color-cyan",
  },
  {
    id: "green",
    name: "Green",
    background: "green-color",
    class: "theme-color-green",
  },
  {
    id: "orange",
    name: "Orange",
    background: "orange-color",
    class: "theme-color-orange",
  },
];

const ThemeMenu = () => {
  const dispatch = useDispatch();
  const menuRef = useRef();
  const menuToggleRef = useRef();
  const [currentTheme, setCurrentTheme] = useState("");
  const [currentColor, setCurrentColor] = useState("");

  useToggleDropdown({
    contentRef: menuRef,
    toggleRef: menuToggleRef,
  });

  const onOpenThemeMenu = () => {
    menuRef.current.classList.add("active");
  };
  const onRemoveThemeMenu = () => {
    menuRef.current.classList.remove("active");
  };

  const onSelectThemeColor = (mode) => {
    setCurrentTheme(mode.id);
    localStorage.setItem("themeMode", mode.class);
    dispatch(ThemeAction.setThemeMode(mode.class));
  };

  const onSelectColor = (mode) => {
    setCurrentColor(mode.id);
    localStorage.setItem("colorMode", mode.class);
    dispatch(ThemeAction.setColorMode(mode.class));
  };

  useEffect(() => {
    const themeClass = modeSettings.find(
      (e) => e.class === localStorage.getItem("themeMode", "theme-mode-light")
    );
    const colorClass = colorSettings.find(
      (e) => e.class === localStorage.getItem("colorMode", "theme-color-blue")
    );

    if (themeClass !== undefined) {
      setCurrentTheme(themeClass.id);
    }

    if (colorClass !== undefined) {
      setCurrentColor(colorClass.id);
    }
  }, []);

  return (
    <>
      <div
        ref={menuToggleRef}
        className="dropdown__toggle"
        onClick={onOpenThemeMenu}
      >
        <i className="bx bx-palette"></i>
      </div>
      <div className="theme-menu" ref={menuRef}>
        <h4>Theme setting</h4>
        <button className="theme-menu__close" onClick={onRemoveThemeMenu}>
          <i className="bx bx-x"></i>
        </button>
        <div className="theme-menu__select">
          <span>Change mode</span>
          <ul className="mode-list">
            {modeSettings.map((item, index) => (
              <li key={index} onClick={() => onSelectThemeColor(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    currentTheme === item.id ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Change color</span>
          <ul className="mode-list">
            {colorSettings.map((item, index) => (
              <li key={index} onClick={() => onSelectColor(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    currentColor === item.id ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThemeMenu;
