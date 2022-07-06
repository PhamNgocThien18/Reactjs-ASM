import React from "react";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentid: '',
            age: 0,
            email: '',
            error: {
                studentid: '',
                age: '',
                email: ''
            }
        }
    };

    handleInputChange = (event) => {
        const nameControl = event.target.name;
        const value = event.target.value;
        this.setState({
            [nameControl]: value
        });
    }

    handleInputBlur = (event) => {
        const nameControl = event.target.name;
        const value = event.target.value;
        const pattern = /^[a-zA-Z]+[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$/;
        if (nameControl === "studentid" && value.length < 3) {
            this.setState({
                error: { ...this.state.error, studentid: "Your Student ID should be from 3 characters" }
            });
        } else if (nameControl === "age" && (parseInt(value) < 18 || parseInt(value) > 65)) {
            this.setState({
                error: { ...this.state.error, age: "Your age should be from 18 to 65" }
            });
        } else if (nameControl === "email" && !pattern.test(value)) {
            this.setState({
                error: { ...this.state.error, email: "Your email should be xxx@xxx.xx" }
            });
        } else {
            this.setState({
                error: { ...this.state.error, studentid: "", age: "", email: "" }
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('Your feed back have been sent');
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="studentid">Student ID: </Label>
                            <Input type='text' id="studentid" name="studentid" placeholder="Input Your Student ID" value={this.state.studentid}
                                valid={this.state.error.studentid === ''} invalid={this.state.error.studentid !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleInputBlur} />
                            <FormFeedback>{this.state.error.studentid}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="age">Age: </Label>
                            <Input type='text' id="age" name="age" placeholder="Age" value={this.state.age}
                                valid={this.state.error.age === ''} invalid={this.state.error.age !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleInputBlur} />
                            <FormFeedback>{this.state.error.age}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email: </Label>
                            <Input type='text' id="email" name="email" placeholder="Email" value={this.state.email}
                                valid={this.state.error.email === ''} invalid={this.state.error.email !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleInputBlur} />
                            <FormFeedback>{this.state.error.email}</FormFeedback>
                        </FormGroup>
                        <Input type="submit" />
                    </Form>
                </div>
            </div>
        );
    }
}

export default MyForm;