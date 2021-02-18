import React, { Component } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import './RegisterComponent.css'
import { Redirect } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.submitRegister = this.submitRegister.bind(this)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  }

  submitRegister(e) {
    e.preventDefault();
    this.props.register({
      ...this.state,
    })
  }

  render() {
    if (this.props.user.token !== "") {
      return (<Redirect to={'/home'} />)
    }

    return (
      <div className="centered-div">
        <Row>
          <h1>REGISTER</h1>
        </Row>
        <div className="separator"></div>
        <Row>
          <Form onSubmit={this.submitRegister}>
            <Form.Group controlId="registerFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" onChange={(e) => this.setState({ firstName: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="registerLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" onChange={(e) => this.setState({ lastName: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="registerEmailAddress">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit" disabled={this.props.loading}>
              Submit
              <ClipLoader color={"#ffffff"} loading={this.props.loading} size={20} className="spinner" />
            </Button>
          </Form>
        </Row>
        <Row className="errors">
          {this.props.errors.map((e, i) => (<p key={i}>{e}</p>))}
        </Row>
      </div>
    );
  }
}