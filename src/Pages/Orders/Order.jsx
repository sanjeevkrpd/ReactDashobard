import React from 'react'
import { Layout, theme } from "antd";
const Content = Layout;

const Order = ( {colorBgContainer,borderRadiusLG}) => {
  return (
   <>
     <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       Orders
      </Content>
   </>
  )
}

export default Order