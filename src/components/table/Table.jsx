import React, { useMemo } from "react";

import "./table.css";

const Table = (props) => {
  const headerRender = useMemo(() => {
    if (typeof props.headerRender === "function") {
      return props.headerRender();
    }

    return (
      <tr>
        {props.headerRender.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    );
  }, [props]);

  const rowRenderElms = useMemo(() => {
    if (props.data === undefined) return <></>;

    return props.data.map((item, index) => (
      <React.Fragment key={index}>
        {props.rowRender(item, index)}
      </React.Fragment>
    ));
  }, [props]);

  if (!props.data) return <></>;

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>{headerRender}</thead>
          <tbody>{rowRenderElms}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
