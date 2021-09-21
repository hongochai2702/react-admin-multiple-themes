import React, { useEffect, useRef } from "react";
import "./dropdown.css";

export const useToggleDropdown = ({ contentRef, toggleRef }) => {
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (toggleRef.current && toggleRef.current.contains(e.target)) {
        contentRef.current.classList.toggle("active");
      } else {
        if (contentRef.current && !contentRef.current.contains(e.target)) {
          contentRef.current.classList.remove("active");
        }
      }
    });
  }, [contentRef, toggleRef]);
};

const Dropdown = (props) => {
  const dropdownToggleElm = useRef();
  const dropdownContentElm = useRef();

  useToggleDropdown({
    contentRef: dropdownContentElm,
    toggleRef: dropdownToggleElm,
  });

  return (
    <div className="dropdown">
      <button ref={dropdownToggleElm} className="dropdown__toggle">
        {props.icon && <i className={props.icon} />}
        {props.badge && (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        )}
        {props.customToggle}
      </button>
      <div ref={dropdownContentElm} className="dropdown__content">
        {props.renderItems ? props.renderItems : ""}
        {props.renderFooter && (
          <div className="dropdown__footer">{props.renderFooter}</div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
