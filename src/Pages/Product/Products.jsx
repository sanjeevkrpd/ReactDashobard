import React from 'react'
import { Button, Layout,  } from 'antd';

const {  Content } = Layout;
const Products = ( {colorBgContainer,borderRadiusLG}) => {
  return (
    <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}
  >
   Product
  </Content>
  )
}

export default Products