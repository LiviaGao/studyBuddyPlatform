import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, HomeOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Group from './pages/Group/Group';
import Profile from './pages/Profile/Profile';
import GroupDetail from './pages/GroupDetail/GroupDetail'; 
import Members from './pages/GroupDetail/Members';
import Task from './pages/Task/Task';
import Request from './pages/Task/Request';
import './App.css'
import Navbar from './components/Header/Header';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '/home', <HomeOutlined />),
  getItem('Profile', '/profile', <UserOutlined />),
  getItem('Group', '/group', <TeamOutlined />),
  getItem('Group Management', '/group_mgmt/plans', <DesktopOutlined />),
  getItem('Tasks and Requests', '/task_req/task', <DesktopOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.key, {replace: true});
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider className='sidebar' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='sidebar__title' >
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" items={items} onClick={onClick}/>
      </Sider>
      <Layout style={{
            
          }} className="site-layout">
          <Navbar />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
             
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='page__content'
            style={{
              minHeight: '100vh',
              background: colorBgContainer,
              opacity:.7
            }}
          >
            <Routes className='content__detail'>
              <Route exact path='/home' element={<Home />} className='page__element'></Route>
              <Route exact path='/profile' element={<Profile />} className='page__element'></Route>
              <Route exact path='/group' element={<Group />} className='page__element'></Route>
              <Route exact path='/group_mgmt/plans' element={<GroupDetail />} className='page__element'></Route>
              <Route exact path='/group_mgmt/members' element={<Members />} className='page_element'></Route>
              <Route exact path='/task_req/task' element={<Task />} className='page_element'></Route>
              <Route exact path='/task_req/request' element={<Request />} className='page_element'></Route>
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Study Buddy Platform ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;