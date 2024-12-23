import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Products from '../../Pages/Product/Products'
import { Button, Layout,  } from 'antd';
import Order from '../../Pages/Orders/Order';
import AddProduct from '../../Pages/Product/AddProduct';
import ViewProduct from '../../Pages/Product/ViewProduct';

const {  Content } = Layout;
const SideContentBox = ({ colorBgContainer , borderRadiusLG }) => {
    return(
        <>
      
      <Routes>
        <Route path="/" element={<Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </Content>}/>
        <Route path="/dashboard" element={<Dashboard  colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}   />} />
        <Route path="/product/add" element={<AddProduct  colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}/>} />
        <Route path="/product/view" element={<ViewProduct  colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}/>} />
        <Route path="/product" element={<Products  colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}/>} />
    
      </Routes>
  
        </>
      )
}

export default SideContentBox