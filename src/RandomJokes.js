import React, { Component } from 'react'
import axios from './node_modules/axios'
import './RandomJokes.css'

class RandomJokes extends Component {
    static defaultProps = {

    };
    constructor(props) {
        super(props);
        this.state = {
            joke: ""
        }
        this.getRandomJoke = this.getRandomJoke.bind(this)
    };
    async getRandomJoke() {
        let testUrl = 'http://api.icndb.com/jokes/random'
        let res = await axios.get(testUrl)
        let randJoke = res.data.value.joke;
        this.setState({
            joke: randJoke
        })
    }
    render() {
        return (
            <div className="col-lg-5 card-1">
                <h2>Get Random Joke</h2>
                <img className="img-fluid" alt="smiling-doggo" src="https://media.istockphoto.com/photos/happy-puppy-dog-smiling-on-isolated-yellow-background-picture-id1267466399?s=612x612" />
                <h3>{this.state.joke}</h3>
                <button onClick={this.getRandomJoke} className="my-3 btn">Click here to get a Random Joke !!!</button>
            </div>
        )
    }
}

export default RandomJokes;