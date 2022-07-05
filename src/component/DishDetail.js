import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-12 m-1">
      <Card>
        <CardBody>
        <CardImg style={{width: 800, height: 400}}  top src={dish.image}  />
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
class DishDetail extends Component {
  constructor(props) {
     super(props);
  }
  render() {
     if (this.props.dish != null) {
        const dish = this.props.dish;
        // const comments = this.props.comments;
        return (
           <div className="container">
              <div className="row">
                 <Breadcrumb>
                    <BreadcrumbItem>
                       <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                 </Breadcrumb>
                 <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                 </div>
              </div>
              <div className="row">
                 <div className="col-12 col-md-12 m-1">
                    <RenderDish dish={dish} />
                 </div>
                 <div className="col-12 d-flex">
                    <div className='col-6'>
                      <Link to="/menu" ><button className='btn-view'> Back to Menu</button></Link>
                    </div>
                    <div className='col-6'>
                      <a href={dish.link} target='_blank' ><button className='btn-view'>View Source</button></a>
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

export default DishDetail;