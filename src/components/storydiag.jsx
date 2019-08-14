import style from './storydiag.css'


const Diaglog = (saying, player) => {
    console.log(saying)
    console.log(player)
    return (
        <div className={style.diag}>
            <div className={style.pop1}></div>
            <div className={style.pop2}></div>
            <p>{saying.saying}</p>
        </div>
    )
}


const StoryDiaglog = () => {
    return (
        <div>
            <div className={style.top}>
                <div className={style.bg} ></div>
                <Diaglog saying = "你对力量一无所知!"/>
                <Diaglog saying = "你对力量一无所知!" player/>
                <Diaglog saying = "你对力量一无所知!"/>
                <Diaglog saying = "你对力量一无所知!"/>
            </div>
        </div>
    )
}

export default StoryDiaglog