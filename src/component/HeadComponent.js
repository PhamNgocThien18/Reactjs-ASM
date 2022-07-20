import React, {Component} from "react";
class HeadComponent extends Component{
    
    render(){
        return(
            <div className="header">
                <div className="top-header col-12 d-flex">
                    <div className="logo-header">
                        <h2> Bờ Lóc Chen Lùa Gà</h2>
                    </div>
                    <div className="right-header">
                        <h5>
                            <a href="https://www.youtube.com/" target="_blank" className="fa fa-youtube-play fa-lg"></a>
                            <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook fa-lg"></a>
                            <a className="bell-icon fa fa-bell fa-lg">
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeadComponent;