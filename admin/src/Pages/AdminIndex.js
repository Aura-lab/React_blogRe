import React,{useState} from 'react';
import {Route} from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import articleList1 from './articleList1'
import 'antd/dist/antd.css';
import '../static/css/AdminIndex.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props){
    const[collapsed,setCollapsed] = useState(false)
    const onCollapse = collapsed => {
      setCollapsed(collapsed)
  };

  const handleClickArticle = e=>{
    console.log(e.item.props)
    if(e.key==='addArticle'){
      props.history.push('/index/add')
    }else{
      props.history.push('/index/list')
    }
  }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              工作台
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              添加文章
            </Menu.Item>
            <SubMenu key="sub1"
            onClick={handleClickArticle}
             icon={<UserOutlined />} 
             title={
                <span>
                    文章管理
                </span>
            }>
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>

            </SubMenu>
            
            <Menu.Item key="9" icon={<FileOutlined />}>
                <span>留言管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
                <div>
                <Route path="/index/" exact  component={AddArticle} />
                <Route path="/index/add" exact  component={AddArticle} />
                <Route path="/index/list/" exact  component={ArticleList} />
                </div>
            </div>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Aura Blog ©2020 Created by A.W</Footer>
        </Layout>
      </Layout>
    );
  }
export default AdminIndex