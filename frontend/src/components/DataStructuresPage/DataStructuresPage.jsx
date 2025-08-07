import React from 'react';
import './DataStructuresPage.css';

export default function DataStructuresPage() {
    return (
        <div className="data-structures-page">
            <div className="page-header">
                <h1>Data Structures</h1>
                <p>Learn about fundamental data structures and their implementations</p>
            </div>

            <div className="coming-soon">
                <div className="coming-soon-content">
                    <h2>🚧 Coming Soon</h2>
                    <p>We're working hard to bring you interactive visualizations for:</p>
                    <ul>
                        <li>Arrays & Linked Lists</li>
                        <li>Stacks & Queues</li>
                        <li>Trees (Binary, AVL, Red-Black)</li>
                        <li>Graphs & Networks</li>
                        <li>Heaps & Priority Queues</li>
                        <li>Hash Tables</li>
                    </ul>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
} 