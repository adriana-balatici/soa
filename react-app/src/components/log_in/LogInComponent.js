import React, { Component } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import './LogInComponent.css'
import ClipLoader from "react-spinners/ClipLoader";
import { Redirect } from 'react-router-dom'

export default class LogInComponent extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    this.state = {
      email: "",
      password: "",
    }
  }

  login(e) {
    e.preventDefault()
    this.props.logIn({
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
          <h1>LOG IN</h1>
        </Row>
        <div className="separator"></div>
        <Row>
          <Form onSubmit={this.login}>
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