import React from 'react';
import './RecursionPage.css';

export default function RecursionPage() {
    return (
        <div className="recursion-page">
            <div className="page-header">
                <h1>Recursion</h1>
                <p>Master recursive algorithms and understand the call stack</p>
            </div>

            <div className="coming-soon">
                <div className="coming-soon-content">
                    <h2>🚧 Coming Soon</h2>
                    <p>We're working hard to bring you interactive visualizations for:</p>
                    <ul>
                        <li>Factorial & Fibonacci</li>
                        <li>Tree Traversals</li>
                        <li>Backtracking</li>
                        <li>Divide & Conquer</li>
                        <li>Call Stack Visualization</li>
                    </ul>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
} 