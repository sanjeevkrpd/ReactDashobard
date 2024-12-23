import React from 'react'
import { Button, Layout,  } from 'antd';


const {  Content } = Layout;
const AddProduct = ({colorBgContainer , borderRadiusLG}) => {
  return (
    <Content
    style={{
      margin: '16px 16px',
      padding: 24,
      minHeight: 280,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}
  >
   Add page
  </Content>
  )
}

export default AddProduct