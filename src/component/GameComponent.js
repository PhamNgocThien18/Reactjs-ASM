import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'reactstrap';
function RenderGameItem({ game}) {
    return (
        <Card className="cardtittle">
            <Link style={{textDecoration:"none"}} to={`/game/${game.id}`} >
            <CardImg width="100%" src={game.image}/>
            </Link>
        </Card>
    );
}
class  GameComponent extends Component {
    constructor (props){
        super(props);
    }
    render(){
        const rendergame = this.props.games.map((game) => {
            return (
                <div className="col-12 col-md-4" key={game.id}>
                    <RenderGameItem game={game} />
                </div>
            );
        });
        
        return(
            <div className="d-flex">
                <div className="navbar-option col-2">
                    <ul>
                        <li className="option"><Link to='/home'><span className=" fa fa-home fa-lg"><p className="option-name">Home</p></span></Link></li>
                        <li className="option active"><Link to='/game'><span className="icon fa fa-gamepad fa-lg"><p className="option-name">Game</p></span></Link></li>
                        <li className="option"><Link to='/feedback'><span className="fa fa-user fa-lg"><p className="option-name">Feed back</p></span></Link></li>
                    </ul>
                </div>
                <div className="content col-10">
                    <div className="tittle col-12">
                        <h2>Play to lùa gà</h2>
                    </div>
                    <div className="option-content row col-12">
                        {rendergame}
                    </div>
                </div>
            </div>
        );
  
    }
}
export default GameComponent;