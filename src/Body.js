import React, { Component } from 'react'
import RandomJokes from './RandomJokes';
import RandomNumber from './RandomNumber'
import './Body.css'

class Body extends Component {
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
                <div className="row Cards">
                    <RandomJokes />
                    <RandomNumber />
                </div>
            </div>
        )
    }
}

export default Body;