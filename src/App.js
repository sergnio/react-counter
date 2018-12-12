import React, {Component} from 'react';
import Navbar from './component/Navbar';
import Counters from './component/counters';

import './App.css';

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ],
        movies :[]
    };

    constructor() {
        super();
        console.log('App - constructor');
    }


    componentDidMount() {
        // Perfect place to make ajax calls from server
        const movies = [{id: 1, title: 'DBZ'},
            {id: 2, title: 'Superman'},
            {id: 3, title: 'Spiderman'}];

        this.setState({movies});
        console.log('App - mounted');
    }


    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters})

        console.log(this.state.counters[0]);
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };

    render() {
        console.log('App - rendered');
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={this.state.counters.filter(c=> c.value > 0).length}
                />j
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
