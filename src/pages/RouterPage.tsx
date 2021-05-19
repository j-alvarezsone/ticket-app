import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { ToEnter } from './ToEnter';
import { LineUp } from './LineUp';
import { CreateTicket } from './CreateTicket';
import { Desk } from './Desk';

const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider collapsedWidth='0' breakpoint='md'>
          <div className='logo' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<UserOutlined />}>
              <Link to='/toenter'>To enter</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              <Link to='/lineup'>Line up of ticket</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<UploadOutlined />}>
              <Link to='/create'>Create Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path='/toenter' component={ToEnter} />
              <Route path='/lineup' component={LineUp} />
              <Route path='/create' component={CreateTicket} />

              <Route path='/desk' component={Desk} />

              <Redirect to='/toenter' />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
