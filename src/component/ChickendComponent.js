import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'reactstrap';


const  ChickenComponent =(props)=> {
        return(
            <div className="d-flex">
                <div className="navbar-option col-2">
                    <ul>
                        <li className="option"><Link to='/home'><span className="fa fa-home fa-lg"><p className="option-name">Home</p></span></Link></li>
                        <li className="option"><Link to='/game'><span className="fa fa-gamepad fa-lg"><p className="option-name">Game</p></span></Link></li>
                        <li className="option"><Link to='/feedback'><span className="fa fa-user fa-lg"><p className="option-name">Feed Back</p></span></Link></li>
                    </ul>
                </div>
                <div className="content col-10">
                    <div className="tittle col-12">
                        <CardImg src="\img\huanhoahong.jpg" />
                    </div>
                </div>
            </div>
        );
  
        
}
export default ChickenComponent; 