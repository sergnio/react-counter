import React from 'react';

// Stateless Functional Component
// Object destructuring - through this syntax, passing 'props' isn't necessary.
// Through object destructuring, you choose the properties you want to pass.
const Navbar = ({totalCounters}) => {
    console.log('Navbar - rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">
                    Counters {totalCounters}
                    </span>
            </a>
        </nav>
    );
};


export default Navbar;