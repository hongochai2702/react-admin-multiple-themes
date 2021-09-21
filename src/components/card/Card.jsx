import React from "react";

const Card = ({ className, title, children, footer }) => {
  const classes = `${className} card`;
  return (
    <div className={classes}>
      {title && (
        <div className="card__header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
