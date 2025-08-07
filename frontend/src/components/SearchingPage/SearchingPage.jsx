import React from 'react';
import './SearchingPage.css';

export default function SearchingPage() {
    return (
        <div className="searching-page">
            <div className="page-header">
                <h1>Searching Algorithms</h1>
                <p>Explore different searching techniques and see how they work</p>
            </div>

            <div className="coming-soon">
                <div className="coming-soon-content">
                    <h2>🚧 Coming Soon</h2>
                    <p>We're working hard to bring you interactive visualizations for:</p>
                    <ul>
                        <li>Linear Search</li>
                        <li>Binary Search</li>
                        <li>Jump Search</li>
                        <li>Interpolation Search</li>
                        <li>Exponential Search</li>
                    </ul>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
} 