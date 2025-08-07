import React from 'react';
import './DynamicProgrammingPage.css';

export default function DynamicProgrammingPage() {
    return (
        <div className="dynamic-programming-page">
            <div className="page-header">
                <h1>Dynamic Programming</h1>
                <p>Solve complex problems with optimal substructure and overlapping subproblems</p>
            </div>

            <div className="coming-soon">
                <div className="coming-soon-content">
                    <h2>🚧 Coming Soon</h2>
                    <p>We're working hard to bring you interactive visualizations for:</p>
                    <ul>
                        <li>Fibonacci & Memoization</li>
                        <li>Longest Common Subsequence</li>
                        <li>Knapsack Problem</li>
                        <li>Edit Distance</li>
                        <li>Matrix Chain Multiplication</li>
                    </ul>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
} 