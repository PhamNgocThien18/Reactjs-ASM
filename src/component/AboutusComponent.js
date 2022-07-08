import React, {Component} from "react";
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import MyForm from './Myform';

const  AboutusComponent =(props)=> {
        return(
            <div className="d-flex">
                <div className="navbar-option col-sm-1">
                    <ul>
                        <li className="option"><Link to='/menu'><span className="fa fa-home fa-lg"><p className="option-tittle">Home</p></span></Link></li>
                        <li className="option"><Link to='/game'><span className="fa fa-gamepad fa-lg"><p className="option-tittle">Game</p></span></Link></li>
                        <li className="option active"><Link to='/aboutus'><span className="icon fa fa-user fa-lg"><p className="option-tittle">Feed Back</p></span></Link></li>
                        <li className="option"><Link to='/contact'><span className="fa fa-user fa-lg"><p className="option-tittle">Contact</p></span></Link></li>
                    </ul>
                </div>
                <div className="content col-11">
                    <div className="tittle col-12">
                        <h2>Send Feed Back </h2>
                    </div>
                    <div className="option-content row col-12">
                        <MyForm />
                    </div>
                </div>
            </div>
        );
  
        
}
export default AboutusComponent; 