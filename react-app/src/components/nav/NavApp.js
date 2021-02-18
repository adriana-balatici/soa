import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavApp.css'

export default class NavApp extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
    this.isActive = this.isActive.bind(this)
    this.navigateToPage = this.navigateToPage.bind(this)
  }

  navigateToPage(page) {
    this.props.changePage(page)
    this.props.clearErrors()
  }

  logOut() {
    this.props.logOut()
    this.props.changePage('home')
    this.props.clearErrors()
  }

  isActive(path) {
    return this.props.activePage.indexOf(path) > -1 ? 'active' : ''
  }

  render() {
    const title = (<span><i className="fa fa-user-circle"></i>{this.props.user.firstName + ' ' + this.props.user.lastName}<div></div></span>)

    const loginLink = this.props.user.token === "" ? (<Link to="/login" className={`nav-link ${this.isActive('login')}`} onClick={() => this.navigateToPage('login')}><span>Log in<div></div></span></Link>) : null
    const registerLink = this.props.user.token === "" ? (<Link to="/register" className={`nav-link ${this.isActive('register')}`} onClick={() => this.navigateToPage('register')}><span>Register<div></div></span></Link>) : null
    const profileLink = this.props.user.token !== "" ? (
      <NavDropdown title={title} id="basic-nav-dropdown" className="profile">
        <Link to="/home" className="nav-link profile dropdown-item" onClick={this.logOut}>
          Log out
        </Link>
      </NavDropdown>) : null

    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home">LoginApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="right-side">
          <Nav className="right-side">
            {loginLink}
            {registerLink}
            {profileLink}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}