import React, { Component } from 'react';
import { Card, CardImg, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderGame({ game }) {
  return (
    <div className="col-12 col-md-12 m-1">
      <Card>
        <CardBody>
        <CardImg top src={game.image}  />
        </CardBody>
      </Card>
    </div>
  );

}

class GameDetail extends Component {
  constructor(props) {
     super(props);
  }
  render() {
     if (this.props.game != null) {
        const game = this.props.game;
        return (
           <div className="container">
              <div className="row mt-1">
                 <Breadcrumb>
                    <BreadcrumbItem>
                       <Link to="/game" style={{textDecoration:"none"}}>Game</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{game.name}</BreadcrumbItem>
                 </Breadcrumb>
                 <div className="col-12">
                    <h3>{game.description}</h3>
                    <hr />
                 </div>
              </div>
              <div className="row">
                 <div className="col-12 col-md-12 m-1">
                    <RenderGame game={game} />
                 </div>
                 <div className="col-12 d-flex">
                    <div className='col-6'>
                      <Link to="/menu" ><button className='btn-view'> Back to Game</button></Link>
                    </div>
                    <div className='col-6'>
                      <a href={game.androi} target='_blank' ><button className='btn-view'>Google Play</button></a>
                    </div>
                 </div>
                 <div className='mt-3 mb-3 col-12 d-flex'>
                 <div className='col-6'>
                      <a href={game.ios}target='_blank' ><button className='btn-view'>Apple Strore</button></a>
                    </div>
                    <div className='col-6'>
                      <a href={game.web}target='_blank' ><button className='btn-view'>View Web</button></a>
                    </div>
                 </div>
              </div>
              
           </div>
        );
     } else {
        return <div></div>;
     }
  }
}

export default GameDetail;