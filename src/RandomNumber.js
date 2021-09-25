import React, { Component } from 'react'
import './RandomNumber.css'

class RandomNumber extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            randInt: 0, sumRandInt: 0, history: [0, 1], history2: "0"
        }
        this.getRandomNumber = this.getRandomNumber.bind(this)
    };
    getRandomNumber() {
        let random = Math.floor(Math.random() * 10);
        this.setState({ randInt: random, sumRandInt: this.state.sumRandInt + random });
        let newString = `${this.state.history2} + ${random} `
        this.setState({ history2: newString })

    }
    render() {
        return (
            <div className="col-lg-5 card-2">
                <h2>Get Random Number</h2>
                <h2 className="my-3">New Random Number : {this.state.randInt}</h2>
                <button onClick={this.getRandomNumber} className="btn" >Click to get a Random number</button>
                <h2 className="my-3">Sum of all numbers : {this.state.sumRandInt} </h2>
                <h2>History : {this.state.history2} </h2>
            </div>
        )
    }
}
export default RandomNumber;