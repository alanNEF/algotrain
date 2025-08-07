import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', active: location.pathname === '/' },
        { path: '/sorting', label: 'Sorting', active: location.pathname === '/sorting' },
        { path: '/searching', label: 'Searching', active: location.pathname === '/searching' },
        { path: '/data-structures', label: 'Data Structures', active: location.pathname === '/data-structures' },
        { path: '/hashing', label: 'Hashing', active: location.pathname === '/hashing' },
        { path: '/recursion', label: 'Recursion', active: location.pathname === '/recursion' },
        { path: '/dynamic-programming', label: 'Dynamic Programming', active: location.pathname === '/dynamic-programming' },
        { path: '/greedy', label: 'Greedy Algorithms', active: location.pathname === '/greedy' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <h1>Algorithm Visualizer</h1>
                </Link>
                <ul className="navbar-nav">
                    {navItems.map((item) => (
                        <li key={item.path} className="nav-item">
                            <Link
                                to={item.path}
                                className={`nav-link ${item.active ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
} 