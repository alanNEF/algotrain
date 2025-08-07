import React from 'react';
import './GreedyPage.css';

export default function GreedyPage() {
    return (
        <div className="greedy-page">
            <div className="page-header">
                <h1>Greedy Algorithms</h1>
                <p>Learn greedy approaches to optimization problems</p>
            </div>

            <div className="coming-soon">
                <div className="coming-soon-content">
                    <h2>🚧 Coming Soon</h2>
                    <p>We're working hard to bring you interactive visualizations for:</p>
                    <ul>
                        <li>Activity Selection</li>
                        <li>Huffman Coding</li>
                        <li>Dijkstra's Algorithm</li>
                        <li>Kruskal's Algorithm</li>
                        <li>Fractional Knapsack</li>
                    </ul>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
} 