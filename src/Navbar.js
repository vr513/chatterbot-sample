import React, { Component } from 'react'
import './Navbar.css'


class Navbar extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        return (
            <div>
                <div className="Main-Navbar">
                    <nav className="navbar navbar-expand-md navbar-dark ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ">
                                    <a className="nav-link active" aria-current="page" href="">Home</a>
                                    <a className="nav-link" href="">Features</a>
                                    <a className="nav-link" href="">Pricing</a>
                                    <a className="nav-link disabled" href="" tabindex="-1" aria-disabled="true">Disabled</a>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        )
    }
}

export default Navbar;