import style from './storydiag.css'


const Diaglog = ({ saying, player }) => {
    console.log(saying)
    console.log(player)

    return (
        <div className={style.top} style={player ? { direction: "rtl" } : {}}>
            <div className={player ? style.bgdiagplayer : style.bg}></div>
            <div className={style.diag} >
                <div className={player ? style.pop1p : style.pop1}></div>
                <div className={player ? style.pop2p : style.pop2}></div>
                <p>{saying}</p>
            </div>
        </div >
    )
}


const StoryDiaglog = () => {
    return (
        <div>
            <Diaglog saying="你对力量一无所知!1" />
            <Diaglog saying="你对力量才是一无所知!2" player />
            <Diaglog saying="你对力量是真的一无所知!3" />
            <Diaglog saying="你们全家都对力量是一无所知!4你们全家都对力量是一无所知你们全家都对力量是一无所知你们全家都对力量是一无所知" />
            <Diaglog saying="你对力量才是一无所知你对力量才是一无所知你对力量才是一无所知你对力量才是一无所知你对力量才是一无所知你对力量才是一无所知你对力量才是一无所知!2可是" player />
        </div >
    )
}

export default StoryDiaglog