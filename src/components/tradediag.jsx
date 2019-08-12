import style from './tradediag.css'
import { Button, Icon } from 'antd'
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

        const Tradeanime1 = () => {
            if (this.state.changing) {
                return (
                    <TweenOne animation={anime1} onChange={this.onFinish}>
                        <div className={style.trade1}></div>
                    </TweenOne>
                )
            } else {
                return (<div className={style.trade1}></div>)
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
                return (<div className={style.trade2}></div>)
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