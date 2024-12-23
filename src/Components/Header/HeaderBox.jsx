import React, { useEffect } from "react";
import { Button, Layout, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SunOutlined,
  MoonFilled,
  UserOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Dropdown } from "antd";

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: "My Account",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Profile",
    extra: "⌘P",
  },
  {
    key: "3",
    label: "Billing",
    extra: "⌘B",
  },
  {
    key: "4",
    label: "Settings",
    icon: <SettingOutlined />,
    extra: "⌘S",
  },
];

const HeaderBox = ({ colorBgContainer, collapsed, setCollapsed, toggleDayNight, isDay }) => {
  useEffect(() => {
   
  }, [isDay]);

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: isDay ? "#000" : "#fff",
            fontSize: "16px",
            width: 64,
            height: 64,
            borderRadius: "50%",
            outline: "none",
            border: "none",
          }}
        />
      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "auto",
        }}
      >
    
        <Button
          type="text"
          icon={isDay ? <MoonFilled /> : <SunOutlined style={{ color: isDay ? "#000" : "#fff" }} />}
          onClick={toggleDayNight}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            borderRadius: "50%",
            outline: "none",
            border: "none",
          }}
        />

        {/* Notification Button */}
        <Button
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            borderRadius: "50%",
            outline: "none",
            border: "none",
            borderColor: isDay ? "#fff" : "rgb(0,21,41)",
            backgroundColor: isDay ? "#fff" : "rgb(0,21,41)",
          }}
        >
          <Badge count={5}>
            <Avatar shape="circle" size="medium" icon={<NotificationsNoneIcon />} />
          </Badge>
        </Button>

        {/* User Dropdown Button */}
        <Button
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            borderRadius: "50%",
            outline: "none",
            border: "none",
            borderColor: isDay ? "#fff" : "rgb(0,21,41)",
            backgroundColor: isDay ? "#fff" : "rgb(0,21,41)",
          }}
        >
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar icon={<UserOutlined />} />
            </a>
          </Dropdown>
        </Button>
      </div>
    </Header>
  );
};

export default HeaderBox;
