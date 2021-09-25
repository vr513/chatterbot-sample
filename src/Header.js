import React, { Component } from 'react'
import './Header.css'
import Navbar from './Navbar';

class Header extends Component {
    static defaultProps = {
        companyName: "Test"
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        return (
            <div className="demo" >
                <Navbar />
                <div class="header">
                    <div class="header__bg"></div>
                    <h1 class="header__title">{this.props.companyName}</h1>
                </div>



            </div>
        )
    }
}

export default Header;