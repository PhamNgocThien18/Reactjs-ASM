import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderGame({ game }) {
  return (
    <div className="col-12 col-md-12 m-1">
      <Card>
        <CardBody>
        <CardImg style={{width: 800, height: 400}}  top src={game.image}  />
          {/* <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText> */}
        </CardBody>
      </Card>
    </div>
  );

}

function RenderComments({ comments }) {

  if (comments != null) {
    return (
      <div className="col-12 col-md-12 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  else {
    return (
      <div></div>
    );
  }

}
class GameDetail extends Component {
  constructor(props) {
     super(props);
  }
  render() {
     if (this.props.game != null) {
        const game = this.props.game;
        // const comments = this.props.comments;
        return (
           <div className="container">
              <div className="row mt-1">
                 <Breadcrumb>
                    <BreadcrumbItem>
                       <Link to="/game">Game</Link>
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
                    <div className='col-3'>
                      <Link to="/menu" ><button className='btn-view'> Back to Game</button></Link>
                    </div>
                    <div className='col-3'>
                      <a href={game.androi} target='_blank' ><button className='btn-view'>Google Play</button></a>
                    </div>
                    <div className='col-3'>
                      <a href={game.ios}target='_blank' ><button className='btn-view'>Apple Strore</button></a>
                    </div>
                    <div className='col-3'>
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
// const DishDetail = (props) => {

//   if (this.props.dish != null) {

//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h3>{props.dish.name}</h3>
//             <hr />
//           </div>
//         </div>
//         <div className="row">
//           <RenderDish dish={props.dish} />
//         </div>
//       </div>
//     )
//   }
//   else {
//     return (
//       <div></div>
//     );
//   }

// }

export default GameDetail;