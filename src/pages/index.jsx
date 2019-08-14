import React from 'react'
import 'antd/dist/antd.css'
import { connect } from 'dva'
import style from './index.css'
import { Button, Layout, Menu, Icon, Modal, Popover } from 'antd'
import Gameplayer from '../components/gamepalyer'
import Tradediag from '../components/tradediag'
import StoryDiaglog from '../components/storydiag'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu, Item } = Menu

const Main = ({ dispatch, trade , story}) => {
    const showdiag = (e) => {
        dispatch({
            type: 'main/trade',
            playload: true,
        })
    }    
    const showstory = (e) => {
        dispatch({
            type: 'main/story',
            playload: true,
        })
    }
    const hidediag = (e) => {
        dispatch({
            type: 'main/trade',
            playload: false,
        })
        dispatch({
            type: 'main/story',
            playload: false,
        })
    }

    const modal = {
        visible: trade,
        onOk: hidediag,
        onCancel: hidediag,
        title: null,
        footer: null,
        width: 800,
    }

    const storymodal = {
        visible: story,
        onOk: hidediag,
        onCancel: hidediag,
        title: null,
        footer: null,
        width: 800,
    }
    const content = (
        <div>
          <p>一个明星棒棒糖,曾经在周星星电影&lt;功夫&gt;中本色出演,塑造出经典的银屏形象</p>
        </div>
      );
      
    return (
        <Layout className={style.all}>
            <Header theme="light" className={style.header}>
                <span>
                    <Icon type="paper-clip" />
                    &nbsp;别针换别墅 &nbsp;
                    <Icon type="home" /></span>
                <div><Button type="danger">重置</Button></div>
                <div><Button onClick={() => showstory()}>故事</Button></div>
            </Header>
            <Layout  >
                <Sider theme="dark" className={style.sider}>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"  >
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
                <Layout>
                    <Content className={style.board}>
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <Gameplayer onClick={showdiag} />
                        <div className={style.holder}> &nbps;</div>
                    </Content>
                    <Footer className={style.footer}>
                        <div className={style.player}>
                        </div>
                        <Popover placement="leftBottom" content={content} title="棒棒糖">
                            <div className={style.item}>
                            </div>
                        </Popover>
                    </Footer>

                </Layout>
            </Layout>

            <Modal {...modal} >
                <Tradediag></Tradediag>
            </Modal>

            <Modal {...storymodal}>
                <StoryDiaglog></StoryDiaglog>
            </Modal>
        </Layout>
    )
}
const mapping = ({ main }) => {
    return { trade: main.showTrade, story: main.showStory }
}

export default connect(mapping)(Main);
