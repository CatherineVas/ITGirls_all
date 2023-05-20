import "./Hero.css"

function Hero(props) {
    return(
        <div className="heroes">
        <h2>{props.name}</h2>
        <div className="heroes-universe">'Вселенная: ${props.universe}'</div>
        <div className="alter">'Альтер Эго: ${props.alterego}'</div>
        <div className="occupation">'Род деятельности: ${props.occupation}'</div>
        <div className="friends">'Друзья: ${props.friends}'</div>
        <div className="superpower">'Суперсила: ${props.superpowers}'</div>
        <div> <img src ={props.url} alt={props.name}> </img> </div>
        <div className="info">'Информация: ${props.info}'</div>
        </div>
    )
}
export default Hero;