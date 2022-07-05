import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem,CardBody
} from 'reactstrap';
function RenderGameItem({ game, onClick }) {
    return (
        <Card className="cardtittle">
            <Link style={{textDecoration:"none"}} to={`/game/${game.id}`} >
            <CardImg width="100%" src={game.image}/>
                    {/* <CardTitle className="cardtittle" >{game.name}<br/>{game.subjectname}</CardTitle> */}
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
                <div className="navbar-option col-1">
                    <ul>
                        <li className="option"><Link to='/menu'><span className=" fa fa-home fa-lg"><p className="option-tittle">Home</p></span></Link></li>
                        <li className="option active"><Link to='/game'><span className="icon fa fa-gamepad fa-lg"><p className="option-tittle">Game</p></span></Link></li>
                        <li className="option"><Link to='/aboutus'><span className="fa fa-user fa-lg"><p className="option-tittle">About</p></span></Link></li>
                        <li className="option"><Link to='/contact'><span className="fa fa-user fa-lg"><p className="option-tittle">Contact</p></span></Link></li>
                    </ul>
                </div>
                <div className="content col-11">
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