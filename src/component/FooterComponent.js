import React, {Component} from "react";
import { Link } from 'react-router-dom';

class FooterComponent extends Component{
    
    render(){
        return(
            <div className="footer">
                <div className="row ">
                    <div>
                        <h3 className="mt-3 mb-3">Đây Là Trang Bờ Lóc Chen Được Tạo Ra Nhằm Mục Đích Lùa Gà</h3>
                    </div>
                    <div className="right-header d-flex mb-5">
                        <h5 className="col-4">
                            <span>Cách để không làm gà rồi bị lùa <i className="fa fa-hand-o-right"></i></span>
                            <a href="https://www.youtube.com/results?search_query=C%C3%A1ch+%C4%91%E1%BB%83+kh%C3%B4ng+l%C3%A0m+g%C3%A0+r%E1%BB%93i+b%E1%BB%8B+l%C3%B9a" target="_blank" className="fa fa-youtube-play fa-lg"></a>
                        </h5>
                        <h5 className="col-4">
                            <span>Pờ rồ phai của thằng đi lùa gà <i className="fa fa-hand-o-right"></i></span>
                            <a href="https://www.facebook.com/ngocthien.PNT/" target="_blank" className="fa fa-facebook fa-lg"></a>
                        </h5>
                        <h5 className="col-4">
                            <span>Cách để đi lùa gà <i className="fa fa-hand-o-right"></i></span>
                            <Link to='/chicken'><span className="fa fa-child fa-lg"></span></Link>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterComponent;