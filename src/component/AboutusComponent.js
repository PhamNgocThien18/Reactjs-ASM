import React, {Component} from "react";
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const  AboutusComponent =(props)=> {
        return(
            <div className="d-flex">
                <div className="navbar-option col-1">
                    <ul>
                        <li className="option"><Link to='/menu'><span className="fa fa-home fa-lg"></span></Link></li>
                        <li className="option"><Link to='/game'><span className="fa fa-gamepad fa-lg"></span></Link></li>
                        <li className="option active"><Link to='/aboutus'><span className="fa fa-user fa-lg"></span></Link></li>
                        <li className="option"><Link to='/contact'><span className="fa fa-user fa-lg"></span></Link></li>
                    </ul>
                </div>
                <div className="content col-11">
                    <div className="col-12">
                        <br/>
                        <h3>About US </h3>
                    </div>
                    <div className="row">
                        {/* {rendermenu} */}
                    </div>
                </div>
            </div>
        );
  
        
}
export default AboutusComponent; 