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
    }
    render() {
        return (
            <div className="Container">
                <div className="row row-content">
                    <div className="Col">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="Col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="First name" value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" placeholder="Last name" value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telno' md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="text" name="telno" placeholder="Phone Number" value={this.state.telno} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" name="email" placeholder="Email" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <input type="checkbox" name='agree' checked={this.state.agree} /> <strong>May we contact you?</strong>
                                            <Col md={{ size: 3, offset: 1 }}>
                                                <Input type="select" name="contacttype" value={this.state.contacttype}>
                                                    <option>Telephone</option>
                                                    <option>Email</option>
                                                </Input>
                                            </Col>
                                        </Label>

                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" placeholder="Message" value={this.state.message} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={10}>
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