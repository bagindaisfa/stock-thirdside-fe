import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <Layout.Sider width={250} theme="dark" collapsible>
      <div
        className="logo"
        style={{
          padding: '16px',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Stock Management
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
          <Link to="/ingredients">Ingredients</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileTextOutlined />}>
          <Link to="/reports">Reports</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
