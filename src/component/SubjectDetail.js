import React, { Component } from 'react';
import { Card, CardImg, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSubject({ dish }) {
  return (
    <div className="col-12 col-md-12 m-1">
      <Card>
        <CardBody>
        <CardImg top src={dish.image}  />
        </CardBody>
      </Card>
    </div>
  );
}
class SubjectDetail extends Component {
  constructor(props) {
     super(props);
  }
  render() {
     if (this.props.dish != null) {
        const dish = this.props.dish;
        // const comments = this.props.comments;
        return (
           <div className="container mb-3">
              <div className="row">
                 <Breadcrumb>
                    <BreadcrumbItem>
                       <Link to="/home" style={{textDecoration:"none"}}>Home</Link>
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
                    <RenderSubject dish={dish} />
                 </div>
                 <div className="col-12 d-flex">
                    <div className='col-6'>
                      <Link to="/home" ><button className='btn-view'> Back to Home</button></Link>
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

export default SubjectDetail;