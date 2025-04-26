import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Topbar = () => {
  return (
    <Layout.Header
      style={{
        padding: 0,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0, 21, 41, 0.15)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '16px',
        paddingRight: '16px',
        width: '100vh',
      }}
    >
      <Button type="default">Logout</Button>
    </Layout.Header>
  );
};

export default Topbar;
