import React from "react";
import { Table } from "antd";

const ContainerRight = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Like",
      dataIndex: "like",
      sorter: (a, b) => a.like - b.like,
    },
    {
      title: "Follow",
      dataIndex: "follow",
      sorter: (a, b) => a.follow - b.follow,
    },
    {
      title: "View",
      dataIndex: "view",
      sorter: (a, b) => a.view - b.view,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown 1",
      like: 24536,
      follow: 13349,
      view: 12323134,
    },
    {
      key: "2",
      name: "Jim Green 2",
      like: 42324,
      follow: 123464,
      view: 13143454,
    },
    {
      key: "3",
      name: "Joe Black 3",
      like: 325435,
      follow: 2343245,
      view: 23143454,
    },
    {
      key: "4",
      name: "Jim Red 4",
      like: 3223213,
      follow: 462432,
      view: 53143454,
    },
    {
      key: "5",
      name: "John Brown 5",
      like: 24536,
      follow: 13349,
      view: 12323134,
    },
    {
      key: "6",
      name: "Jim Green 6",
      like: 42324,
      follow: 123464,
      view: 13143454,
    },
    {
      key: "7",
      name: "Joe Black 7",
      like: 325435,
      follow: 2343245,
      view: 23143454,
    },
    {
      key: "8",
      name: "Jim Red 8",
      like: 3223213,
      follow: 462432,
      view: 53143454,
    },
    {
      key: "9",
      name: "Joe Black 9",
      like: 325435,
      follow: 2343245,
      view: 23143454,
    },
    {
      key: "10",
      name: "Jim Red 10",
      like: 3223213,
      follow: 462432,
      view: 53143454,
    },
    {
      key: "11",
      name: "Joe Black 11",
      like: 325435,
      follow: 2343245,
      view: 23143454,
    },
    {
      key: "12",
      name: "Jim Red 12",
      like: 3223213,
      follow: 462432,
      view: 53143454,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      className="mx-2"
      columns={columns}
      dataSource={data}
      onChange={onChange}
    />
  );
};

export default ContainerRight;
