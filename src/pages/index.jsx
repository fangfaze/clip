import React from 'react'
import 'antd/dist/antd.css'
import style from './index.css'
import { Button, Layout, Menu, Icon } from 'antd'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu, Item } = Menu

export default (props) => {
    return (
        <Layout className={style.all}>
            <Header theme="light" className={style.header}>
                <span>
                    <Icon type="paper-clip" />
                    别针换别墅
                    <Icon type="home" /></span>
                <div><Button>重置</Button></div>
            </Header>
            <Layout  >
                <Sider theme="dark" className={style.sider}>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu title="章节一">
                            <Item key={1}>菜单11</Item>
                            <Item key={2}>菜单2</Item>
                            <Item key={3}>菜单3</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={4}>菜单4</Item>
                            <Item key={5}>菜单5</Item>
                            <Item key={6}>菜单6</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={7}>菜单7</Item>
                            <Item key={8}>菜单8</Item>
                            <Item key={9}>菜单9</Item>
                            <Item key={10}>菜单10</Item>
                            <Item key={11}>菜单1</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={12}>菜单2</Item>
                            <Item key={13}>菜单3</Item>
                            <Item key={14}>菜单4</Item>
                            <Item key={15}>菜单5</Item>
                            <Item key={16}>菜单6</Item>
                            <Item key={17}>菜单7</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={18}>菜单8</Item>
                            <Item key={19}>菜单9</Item>
                            <Item key={20}>菜单10</Item>
                            <Item key={21}>菜单1</Item>
                            <Item key={22}>菜单2</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={23}>菜单3</Item>
                            <Item key={24}>菜单4</Item>
                            <Item key={25}>菜单5</Item>
                            <Item key={26}>菜单6</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={27}>菜单7</Item>
                            <Item key={28}>菜单8</Item>
                        </SubMenu>
                        <SubMenu title="章节一">
                            <Item key={29}>菜单9</Item>
                            <Item key={30}>菜单10</Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
            <Layout className={style.layout}>
                <Content className={style.board}>
                    <div>1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1</div>
                    <div>1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1</div>
                    <div>1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1</div>
                    <div>1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1</div>
                </Content>
                <Footer className={style.footer}>aaaaaaaaaaaaaaaaaaaa</Footer>
            </Layout>
        </Layout>
    )
}
