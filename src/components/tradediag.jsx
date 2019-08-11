import style from './tradediag.css'
import { Row, Col, Button, Icon } from 'antd'

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

const Trade = () => {
    return (
        <Row  type="flex" justify="space-around" align="middle">
            <Col span={8}>
                <div className={style.trade1}></div>
            </Col>
            <Col span={4} style = {{textAlign: 'center'}}>
                <Button type = 'primary'><Icon type ='sync'></Icon>交换</Button>
            </Col>
            <Col span={8}>
                <div className={style.trade2}></div>
            </Col>
        </Row>
    )
}

const Tradediag = () => {
    return (
        <div>
            <div className={style.top}>
                <div className={style.bg} ></div>
                <Diaglog />
            </div>
            <Trade  />
        </div>
    )
}

export default Tradediag