import React, { useCallback } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import statusCards from "../assets/JsonData/status-card-data.json";
import Badge from "../components/badge/Badge";
import Card from "../components/card/Card";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      userName: "join due",
      order: "490",
      price: "$15,780",
    },
    {
      userName: "join da",
      order: "410",
      price: "$15,780",
    },
    {
      userName: "join de",
      order: "190",
      price: "$15,780",
    },
    {
      userName: "join du",
      order: "420",
      price: "$55,780",
    },
  ],
};

const latestOrders = {
  head: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "join due",
      date: "2021-05-04",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "join de",
      date: "2021-05-05",
      price: "$900",
      status: "pending",
    },
    {
      id: "#OD1713",
      user: "join de",
      date: "2021-01-04",
      price: "$902",
      status: "paid",
    },
    {
      id: "#OD1714",
      user: "join d",
      date: "2021-01-04",
      price: "$902",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const TopCustomerRowRender = ({ item, index }) => {
  return (
    <tr key={index}>
      <td>{item.userName}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  );
};

const LatestOrdersRowRender = ({ item, index }) => {
  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
    </tr>
  );
};

const Dashboard = () => {
  const themeModeSelector = useSelector((state) => state.ThemeReducers.mode);

  const topCustomerRowRender = useCallback(
    (item, index) => (
      <TopCustomerRowRender item={item} index={index} key={index} />
    ),
    []
  );

  const latestOrderRowRender = useCallback(
    (item, index) => (
      <LatestOrdersRowRender item={item} index={index} key={index} />
    ),
    []
  );

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={
                themeModeSelector === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: {
                        mode: "dark",
                      },
                    }
                  : {
                      ...chartOptions.options,
                      theme: {
                        mode: "light",
                      },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>

        <div className="col-4">
          <Card title="top customers" footer={<Link to="/">view all</Link>}>
            <Table
              data={topCustomers.body}
              rowRender={topCustomerRowRender}
              headerRender={topCustomers.head}
            />
          </Card>
        </div>
        <div className="col-8">
          <Card title="latest orders" footer={<Link to="/">view all</Link>}>
            <Table
              data={latestOrders.body}
              rowRender={latestOrderRowRender}
              headerRender={latestOrders.head}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
