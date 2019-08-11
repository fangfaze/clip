import style from './tradediag.css'
import { Button, Icon } from 'antd'
import React from 'react'

import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

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
        change: true,
        moment: null
    }
    onClick = () => {
        this.setState({ change: false, moment: null })
    }
    onFinish = (e) => {
        console.log(e)
        if ("onComplete" === e.mode) {
            this.setState({ change: true, moment: 1 })
        }
    }

    render() {
        const anime1 = {
            bezier: {
                type: 'soft',
                autoRotate: false,
                vars: [
                    { x: 0, y: 0 },
                    { x: 150, y: 150 },
                    { x: 300, y: 0 },
                ],
            }
        }
        const anime2 = {
            bezier: {
                type: 'soft',
                autoRotate: false,
                vars: [
                    { x: 0, y: 0 },
                    { x: -150, y: -150 },
                    { x: -300, y: 0 },
                ],
            }
        }
        return (
            <div className={style.tradebg}>
                <TweenOne animation={anime1} paused={this.state.change} moment={this.state.moment} onChange={this.onFinish}>
                    <div className={style.trade1}></div>
                </TweenOne>
                <Button type='primary' onClick={this.onClick}><Icon type='sync'></Icon>交换</Button>
                <TweenOne animation={anime2} paused={this.state.change} moment={this.state.moment}>
                    <div className={style.trade2}></div>
                </TweenOne>
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