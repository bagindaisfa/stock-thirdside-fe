import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useState } from 'react';

const { Content } = Layout;

const LayoutWrapper = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Topbar />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
