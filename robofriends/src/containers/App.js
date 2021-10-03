import React from "react";
import CardList from "../components/CardList";
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/componentErrorBoundary";

//Object which gives Description of app---STATE

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        // console.log(event.target.value);
    }
    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading....</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobot} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );

        }


    }

}
export default App;