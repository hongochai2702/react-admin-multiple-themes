import React, { useCallback } from "react";
import Card from "../components/card/Card";

import Table from "../components/table/Table";
import customerData from "../assets/JsonData/customers-list.json";
const customerTableHead = [
  "#",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const RowItem = ({ item, index }) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{`#${item.id} ${item.name}`}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  const rowRenderer = useCallback(
    (item, index) => <RowItem key={index} index={index} item={item} />,
    []
  );

  return (
    <div>
      <h2 className="page-header">customer</h2>
      <div className="row">
        <div className="col-12">
          <Card title="customer list">
            <Table
              onPageChanged={(page) => console.log(page)}
              currentPage={1}
              limit={10}
              totalRecords={customerData.length}
              data={customerData}
              headerRender={customerTableHead}
              rowRender={rowRenderer}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Customers;
