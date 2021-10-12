import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Button, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, Jumbotron, Collapse, Navbar, Nav,NavbarToggler, NavItem, Form, FormGroup, Input, Label, Dropdown} from 'reactstrap';
import logo from './images/smokestack.png';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            isNavOpen: false,
            isModalOpen: false,
            isRecipeOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleRecipe = this.toggleRecipe.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleRecipe() {
        this.setState({
            isRecipeOpen: !this.state.isRecipeOpen
        });
    }    
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Email address: ${this.loginEmail.value} Password: ${this.loginPassword.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render(){
        return (
            <>
                <Jumbotron fluid className="bg-dark mb-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <img src={logo} alt="smokestack logo" className="img-fluid rounded-circle" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar expand="sm" dark sticky="top" className="bg-dark">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    
                                        <Dropdown isOpen={this.state.isRecipeOpen} onClick={this.toggleRecipe}>
                                            <DropdownToggle className="nav-link" color="none" onClick={this.toggleRecipe} caret>
                                                <i className="fa fa-cutlery fa-lg"/><Link id="recipe-link" to="recipes/beef">Recipes</Link>
                                                <DropdownMenu>
                                                    <DropdownItem><Link to="/recipes/Beef">Beef</Link></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem><Link to="/recipes/Pork">Pork</Link></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem><Link to="/recipes/Poultry">Poultry</Link></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem><Link to="/recipes/Seafood">Seafood</Link></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem><Link to="/recipes/Veggies">Veggies</Link></DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem><Link to="/recipes/Snacks">Snacks</Link></DropdownItem>
                                                </DropdownMenu>
                                            </DropdownToggle>
                                        </Dropdown>
                                    
                                </NavItem>        
                                <NavItem>
                                    <NavLink className="nav-link" to="/store">
                                        <i className="fa fa-shopping-bag fa-lg" /> Store
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-calendar fa-lg" />Events
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <a role="button" id="cart">
                                    <i className="fa fa-shopping-cart"></i> Cart
                                </a>
                            </span>
                            <span className="navbar-text ml-3">
                                <a role="button" id="loginButton" onClick={this.toggleModal}>
                                    <i className="fa fa-user-circle" />Login
                                </a>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} id="loginModal">
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="loginEmail">Email address</Label>
                                <Input type="text" id="loginEmail" name="loginEmail" placeholder="Enter email" innerRef={input => this.loginEmail = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="loginPassword">Password</Label>
                                <Input type="password" id="loginPassword" name="loginPassword" placeholder="Password" innerRef={input => this.loginPassword = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="cancel" color="secondary" value="cancel">Cancel</Button>
                            <Button type="submit" color="primary" value="submit">Sign in</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;