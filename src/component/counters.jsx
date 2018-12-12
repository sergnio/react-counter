import React, {Component} from 'react';
import Counter from './counter'

class Counters extends Component {

    render() {
    console.log('Counters - rendered');
    // Object destructuring - through this syntax, passing 'props' isn't necessary.
    // Through object destructuring, you choose the properties you want to pass.
    const { onReset, counters, onDelete, onIncrement } = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />)}
            </div>
        );
    }
}

export default Counters;