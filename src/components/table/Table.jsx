import React, { useCallback, useEffect, useMemo, useState } from "react";

import "./table.css";
const START_PAGE = 1;

const Table = (props) => {
  const [listItems, setListItems] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(props.currentPage);
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

  useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  useEffect(() => {
    if (!props.data) return;

    const listItemData = props.limit
      ? props.data.slice(0, props.limit)
      : props.data;
    setListItems(listItemData);
  }, [props.data, props.limit]);

  // const currentPage = useMemo(() => {

  // }, []);

  // const paginates = useMemo(() => {
  //   return Math.floor(props.totalRecords / props.limit);
  // }, [props.totalRecords, props.limit]);

  let ranges = [];
  let pages = 1;
  if (props.limit !== undefined) {
    let page = Math.floor(props.totalRecords / props.limit);
    pages = props.totalRecords % Number(props.limit) === 0 ? page : page + 1;
    ranges = [...Array(pages).keys()];
  }

  const handlePaging = useCallback(
    (page) => {
      const pageCurrent = page + 1;

      const startCnt =
        pageCurrent === undefined
          ? START_PAGE
          : (pageCurrent - 1) * props.limit;
      const maxLimitCnt = props.limit * pageCurrent;

      setListItems(props.data.slice(startCnt, maxLimitCnt));
      setCurrentPage(pageCurrent);
      // props.onClickPaged(pageCurrent);
    },
    [props.data, props.limit]
  );

  const rowRenderElms = useMemo(() => {
    return listItems.map((item, index) => (
      <React.Fragment key={index}>
        {props.rowRender(item, index)}
      </React.Fragment>
    ));
  }, [listItems, props]);

  if (!listItems) return <></>;

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>{headerRender}</thead>
          <tbody>{rowRenderElms}</tbody>
        </table>
      </div>
      {pages > 1 && (
        <div className="table__pagination">
          {ranges.map((item, index) => (
            <div
              onClick={() => handlePaging(index)}
              className={`table__pagination_item ${
                currentPage === item + 1 && "active"
              }`}
              key={index}
            >
              {item + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
