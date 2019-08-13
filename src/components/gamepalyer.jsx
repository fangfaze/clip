import style from './gameplayer.css'
import { Popover } from 'antd'

const Gameplayer = ({ onClick, id }) => {
    const title = '发卡'
    const content = (
        <div>
            <p>一个天天飞在天上打妖怪的巫女的发卡,据说是她所有魔力的来源</p>
        </div>
    );
    return (
        <div className={style.bg} onClick={onClick}>
            <Popover placement="leftBottom" content={content} title={title} autoAdjustOverflow = {false} mouseLeaveDelay={0} mouseEnterDelay={0.3} overlayStyle = {{maxWidth: 250}}>
                <div className={style.item}>
                </div>
            </Popover>
        </div>

    )
}

export default Gameplayer
