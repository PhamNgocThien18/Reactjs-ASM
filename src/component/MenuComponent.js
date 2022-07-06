import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem,CardBody
} from 'reactstrap';
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card className="cardtittle">
            <Link style={{textDecoration:"none"}} to={`/menu/${dish.id}`} >
                    <CardTitle className="cardtittle" >{dish.name}<br/>{dish.subjectname}</CardTitle>
            </Link>
        </Card>
    );
}
class  MenuComponent extends Component {
    constructor (props){
        super(props);
    }
    render(){
        const rendermenu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-4" key={dish.id}>
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });
        
        return(
            <div className="d-flex">
                <div className="navbar-option col-1">
                    <ul>
                        <li className="option active"><Link to='/menu'><span className="icon fa fa-home fa-lg"><p className="option-tittle">Home</p></span></Link></li>
                        <li className="option"><Link to='/game'><span className="fa fa-gamepad fa-lg"><p className="option-tittle">Game</p></span></Link></li>
                        <li className="option"><Link to='/aboutus'><span className="fa fa-user fa-lg"><p className="option-tittle">Feed Back</p></span></Link></li>
                        <li className="option"><Link to='/contact'><span className="fa fa-user fa-lg"><p className="option-tittle">Contact</p></span></Link></li>
                    </ul>
                </div>
                <div className="content col-11">
                    <div className="tittle col-12">
                        <h2>Tài Liệu Chuyên Nghành </h2>
                    </div>
                    <div className="option-content row col-12">
                        {rendermenu}
                    </div>
                </div>
            </div>
        );
  
    }
}
export default MenuComponent;