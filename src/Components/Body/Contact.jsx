import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            telno: "",
            email: "",
            agree: false,
            contacttype: 'Tel.',
            message: ""

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind()
    }

    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        document.title="Contact"
        return (
            <div className="Container">
                <div className="row row-content" style={{ padding: "20px", textAlign: "left" }}>
                    <div className="Col">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="Col-12 col-md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text"
                                        name="firstname"
                                        placeholder="First name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text"
                                        name="lastname"
                                        placeholder="Last name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telno' md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="text"
                                        name="telno"
                                        placeholder="Phone Number"
                                        value={this.state.telno}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <input type="checkbox" name='agree' checked={this.state.agree} onChange={this.handleInputChange} /> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contacttype" value={this.state.contacttype} onChange={this.handleInputChange}>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>


                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={{ size: 10, offset: 5 }}>
                                    <button type='submit' color='Green'>
                                        Send Feedback
                                    </button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;