import style from './gameplayer.css'


const Gameplayer = ({onClick, id}) => {
    return (
        <div className={style.bg} onClick ={onClick}>
            <div className={style.item}>
            </div>
        </div>
    )
}

export default Gameplayer
