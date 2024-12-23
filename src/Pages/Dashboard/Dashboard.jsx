import React from 'react';
import { Layout, Card } from 'antd';
import Chart from './Charts/Chart';
import CircleChart from './Charts/CircleChart';
import ProductTable from './Table/ProductTable';

import { BarChartOutlined , RiseOutlined ,EyeTwoTone , WalletTwoTone,UserAddOutlined , DownloadOutlined} from '@ant-design/icons';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StatisticCard from '../../Components/StatisticCard';
const { Content } = Layout;
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";




const Dashboard = ({ colorBgContainer, borderRadiusLG, isDay }) => {
  isDay = true;

  const cardsData = [
    {
      title: 'Today Revenue',
      value: '2189',
      percentage: 12,
      data: [
        { value: 100 }, { value: 200 }, { value: 150 }, { value: 300 }, { value: 400 }
      ],
      icon: <AccountBalanceWalletOutlinedIcon />,
      color: '#8884d8',
    },
    {
      title: 'Today Visitors',
      value: '512',
      percentage: 4,
      data: [
        { value: 50 }, { value: 100 }, { value: 75 }, { value: 150 }, { value: 200 }
      ],
      icon: <PersonAddAltOutlinedIcon />,
      color: '#82ca9d',
    },
    {
      title: 'Today Transactions',
      value: '325',
      percentage: -0.89,
      data: [
        { value: 100 }, { value: 90 }, { value: 80 }, { value: 120 }, { value: 140 }
      ],
      icon: <PaidOutlinedIcon />,
      color: '#ff7300',
    },
    {
      title: 'Total Products',
      value: '268',
      percentage: 23,
      data: [
        { value: 50 }, { value: 80 }, { value: 120 }, { value: 100 }, { value: 150 }
      ],
      icon: <ShoppingBagOutlinedIcon  />,
      color: '#8884d8',
    },
  ];



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
      {/* First Section with Cards */}
      <div style={{ display: 'flex', justifyContent: "space-between", gap: '30px', flexWrap: 'wrap' }}>
      {cardsData.map((card, index) => (
        <div key={index} style={{  minWidth: '300px' }}>
          <StatisticCard {...card} />
        </div>
      ))}
    </div>

      {/* Second Section with Graphs */}
      <div
        className="d-flex flex-wrap flex-row align-items-center justify-content-between w-100"
        style={{ gap: '20px', marginTop: '20px' }}
      >
        <div
          className="d-flex flex-row align-items-center justify-content-between w-60"
          style={{
            flex: '1 1 60%',
          }}
        >
          <Card
            bordered={false}
            style={{
              width: '100%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              borderRadius: '8px',
              display : "flex",
              alignItems : "center",
              justifyContent : "center",
              flexShrink :  "5"
            }}
          >
            <Chart />
          </Card>
        </div>

        <div
          className="d-flex flex-row align-items-center justify-content-between w-30"
          style={{
            flex: '1 1 30%',
          }}
        >
          <Card
            bordered={false}
            style={{
              width: '100%',
              height: 550,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              borderRadius: '8px',
              display : "flex",
              alignItems : "center",
              justifyContent : "center"
            }}
          >
            <CircleChart />
          </Card>
        </div>
      </div>

      <div className="d-flex w-100" style={{ marginTop: '20px' }}>
        <ProductTable />
      </div>
    </Content>
  );
};

export default Dashboard;
