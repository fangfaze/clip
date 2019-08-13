import style from './tradediag.css'
import { Button, Icon, Popover } from 'antd'
import React from 'react'
import TweenOne from 'rc-tween-one';

const Diaglog = () => {
    const text = '我对你的东西没有什么兴趣.'
    return (
        <div className={style.diag}>
            <div className={style.pop1}></div>
            <div className={style.pop2}></div>
            <p>{text}</p>
        </div>
    )
}

class Trade extends React.Component {

    state = {
        changing: false,
    }
    onClick = () => {
        this.setState({ changing: true })
    }
    onFinish = (e) => {
        if ("onTimelineComplete" === e.timelineMode) {
            this.setState({ changing: false, })
        }
    }

    render() {
        const anime1 = [
            { y: -80 },
            { x: 300 },
            { y: 0 },
        ]

        const anime2 = [
            { y: 80 },
            { x: -300 },
            { y: 0 },
        ]
        const content1= (
            <div>
              <p>一个天天飞在天上打妖怪的巫女的发卡,据说是她所有魔力的来源</p>
            </div>
          );
          const content2= (
            <div>
              <p>一个明星棒棒糖,曾经在周星星电影&lt;功夫&gt;中本色出演,塑造出经典的银屏形象</p>
            </div>
          );
    
        const Tradeanime1 = () => {
            if (this.state.changing) {
                return (
                    <TweenOne animation={anime1} onChange={this.onFinish}>
                        <div className={style.trade1}></div>
                    </TweenOne>
                )
            } else {
                return (

                    <Popover placement="top" content={content1} title="发卡">
                        <div className={style.trade1}></div>
                    </Popover>

                )
            }
        }
        const Tradeanime2 = () => {
            if (this.state.changing) {
                return (
                    <TweenOne animation={anime2} >
                        <div className={style.trade2}></div>
                    </TweenOne>
                )
            } else {
                return (
                    <Popover placement="top" content={content2} title="棒棒糖">
                        <div className={style.trade2}></div>
                    </Popover>
                )
            }
        }

        return (
            <div className={style.tradebg}>
                <Tradeanime1 />
                <Button type='primary' disabled={this.state.changing} onClick={this.onClick}><Icon type='sync'></Icon>交换</Button>
                <Tradeanime2 />
            </div>
        )
    }

}

const Tradediag = () => {
    return (
        <div>
            <div className={style.top}>
                <div className={style.bg} ></div>
                <Diaglog />
            </div>
            <Trade />
        </div>
    )
}

export default Tradediag