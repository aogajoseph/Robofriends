import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary.js";
import './App.css';


// smart component (has state)
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h2>Loading...</h2> : (
            <div className="tc">
                <div className="header">
                    <h1 className="f1">Robofriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                </div>
                <div>
                    <ErrorBoundary>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundary>
                </div>
            </div>
        );      
    }

}

export default App;