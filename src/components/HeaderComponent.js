import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import logo from './images/smokestack.png';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render(){
        return (
            <>
                <header className="jumbotron jumbotron-fluid bg-dark mb-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <img src={logo} alt="smokestack logo" className="img-fluid rounded-circle" />
                            </div>
                        </div>
                    </div>
                </header>

                <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#smokestackNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="smokestackNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item active mr-3"><a className="nav-link" href='/home'><i className="fa fa-home fa-lg"></i> Home</a>
                                </li>
                                <li className="nav-item dropdown btn-group mr-3">
                                    <a role="button" className="nav-link" href="recipes.html"><i className="fa fa-cutlery fa-lg"></i> Recipes</a>
                                    <a className="nav-link dropdown-toggle dropdown-toggle-split" href='/home' id="recipeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                    <div className="dropdown-menu" aria-labelledby="recipeDropdown">
                                        <a className="dropdown-item" href="recipes.html#beef">Beef</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="recipes.html#pork">Pork</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="recipes.html#poultry">Poultry</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="recipes.html#seafood">Seafood</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="recipes.html#veggies">Veggies</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="recipes.html#snacks">Snacks</a>
                                    </div>    
                                </li>
                                <li className="nav-item mr-3"><a className="nav-link" href="#"><i className="fa fa-shopping-bag fa-lg"></i> Store</a>
                                </li>
                                <li className="nav-item mr-3"><a className="nav-link" href="#"><i className="fa fa-calendar fa-lg"></i> Events</a>
                                </li>
                            </ul>
                            <span className="navbar-text ml-auto">
                                <a role="button" id="cart">
                                    <i className="fa fa-shopping-cart"></i> Cart
                                </a>
                            </span>
                            <span className="navbar-text ml-3">
                                <Button onClick={this.toggleModal}><i className="fa fa-user-circle" />Login</Button>
                            </span>
                        </div>
                    </div>
                </nav>

                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                            <div className="modal-header">
                                <h3 className="modal-title">Login</h3>
                                <button type="button" id="closeButton" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-12">
                                                <label className="sr-only" for="loginEmail">Email address</label>
                                                <input type="email" className="form-control form-control-sm" id="loginEmail" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group col-12">
                                                <label className="sr-only" for="loginPassword">Password</label>
                                                <input type="password" className="form-control form-control-sm" id="loginPassword" placeholder="Password" />
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label"> Remember me</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-primary btn-sm ml-1">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;