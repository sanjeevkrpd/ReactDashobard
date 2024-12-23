import { Menu } from "antd";
import {
  DashboardOutlined,
  LogoutOutlined,
  ProductOutlined,
  OrderedListOutlined,
  SlackOutlined,
  RedEnvelopeFilled,
  SettingOutlined,
  AppstoreAddOutlined ,
  EyeOutlined ,
  DeleteOutlined ,
  RollbackOutlined 
} from "@ant-design/icons";
import React, { useState } from "react";
import { Layout, theme } from "antd";
import HeaderBox from "./Components/Header/HeaderBox";
import SideContentBox from "./Components/SideContent/SideContentBox";
import { useNavigate } from "react-router-dom";
import "./App.css";

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDay, setIsDay] = useState(true);
  const navigation = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Toggle between Day and Night
  const toggleDayNight = () => {

    setIsDay(!isDay);
  };

  // Custom background color for day and night mode
  const customBgColor = isDay ? "#fff" : "rgb(0,21,41)";
 
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={220}
        style={{
          height: "200vh",
          background: customBgColor, 
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme={isDay ? "light" : "dark"}
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key) {
              navigation(key);
            } else {
              navigation("/");
            }
          }}
          items={[
            {
              label: "Dashboard",
              key: "/dashboard",
              icon: <DashboardOutlined />,
            },
            { label: "Product", key: "/product", icon: <ProductOutlined  />,  children: [
              {
                label: "Add Product",
                key: "/product/add",
                icon: <AppstoreAddOutlined />,
              },
              {
                label: "View Products",
                key: "/product/view",
                icon: <EyeOutlined />,
              },
            ],  },
            { label: "Orders", key: "/order", icon: <OrderedListOutlined /> },
            { label: "Sales", key: "/sales", icon: <SlackOutlined /> },
            { label: "Reviews", key: "/reviews", icon: <RedEnvelopeFilled /> },
            { label: "Setting", key: "/setting", icon: <SettingOutlined /> },
            {
              label: "SignOut",
              key: "/signout",
              danger: true,
              icon: <LogoutOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <HeaderBox
          colorBgContainer={customBgColor} 
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          toggleDayNight={toggleDayNight}
          isDay={isDay}
        />

        <SideContentBox
          colorBgContainer={customBgColor} 
          borderRadiusLG={borderRadiusLG}
        />
      </Layout>
    </Layout>
  );
};

export default App;
