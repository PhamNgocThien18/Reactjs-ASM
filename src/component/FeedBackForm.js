import React from "react";
import { Component } from "react";
import emailjs from "emailjs-com";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class FeedBackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName: null,
          email: null,
          studentid: null,
          feedback:null,
          errors: {
            fullName: '',
            email: '',
            studentid: '',
            feedback:'',
          }
        };
      }
    
      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'fullName': 
            errors.fullName = 
              value.length < 5
                ? 'Full Name must be at least 5 characters long!'
                : '';
            break;
          case 'Email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'studentid': 
            errors.studentid = 
              value.length < 8
                ? 'studentID must be at less than or equal to 8 characters!'
                : '';
            break;
        case 'feedback':
            errors.feedback = 
            value.length <1
            ?'Your feed Back cannot Empty'
            :'';
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          emailjs.sendForm('service_1kj5gci','template_ynbiehs',event.target,'59H2diSAYcwnn_xYj')
          alert('Full Name: '+ this.state.fullName + '\nEmail: ' + this.state.email + '\nStudentID: '+this.state.studentid +'\nYour Feed Back: ' + this.state.feedback)
        }else{
          alert('Invalid Form')
        }
      }
    render(){
        const {errors} = this.state;
    return (
        <div className='form-wapper'>
          <form className="col-sm-12" onSubmit={this.handleSubmit} noValidate>
            <div className='fullName row mt-3'>
              <span className="col-sm-2 col-4">FullName </span>
              <input className="col-sm-9 col-7" type='text' name='fullName' placeholder="Enter Your Name" onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'><br/>{errors.fullName}</span>}
            </div>
            <div className='email row mt-3'>
              <span className="col-sm-2 col-4">Email </span>
              <input className="col-sm-9 col-7" type='email' name='Email' placeholder="Enter Your Email" onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'><br/>{errors.email}</span>}
            </div>
            <div className='studentid row mt-3'>
              <span className="col-sm-2 col-4">StudentID </span>
              <input className="col-sm-9 col-7" type='studentid' name='studentid' placeholder="Enter Your Student ID" onChange={this.handleChange} noValidate />
              {errors.studentid.length > 0 && 
                <span className='error'><br/>{errors.studentid}</span>}
            </div>
            <div className='feedback row mt-3'>
              <span className="col-sm-2 col-4">FeedBack</span>
              <textarea  className='col-sm-9 col-7' type='textarea' placeholder="Write Your Feed Back Here" name="feedback" onChange={this.handleChange} noValidate></textarea >
              {errors.feedback.length > 0 && 
                <span className='error'><br/>{errors.feedback}</span>}
            </div>
            <div className='submit mt-3 mb-3'>
              <button>Send Feed Back</button>
            </div>
          </form>
        </div>
    );
    }
}
export default FeedBackForm;