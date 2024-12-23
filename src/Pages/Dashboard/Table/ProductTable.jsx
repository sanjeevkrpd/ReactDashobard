import React from 'react';
import { Card, Input, Table } from 'antd';

const { Search } = Input;

const MyComponent = () => {

  console.log(import.meta.env.VITE_API_URL);
  
  const onSearch = (value) => {
    console.log(value);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Product 1',
      price: '$10',
    },
    {
      key: '2',
      name: 'Product 2',
      price: '$20',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <div className="row w-100">
      <Card
        title={
          <div className="d-flex align-items-center justify-content-between w-100">
            <span>Products</span>
            <Search
              placeholder="Search products"
              enterButton="Search"
              size="middle"
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </div>
        }
        bordered={false}
        style={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          borderRadius: '8px',
          marginLeft: 10,
        }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
};

export default MyComponent;
