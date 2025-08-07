import React from 'react';
import './HashingPage.css';

export default function HashingPage() {
    return (
        <div className="hashing-page">
            <div className="page-header">
                <h1>Hashing</h1>
                <p>Understand hash functions, hash tables, and collision resolution techniques</p>
            </div>

            <div className="coming-soon">
                <div className="coming-soon-content">
                    <h2>🚧 Coming Soon</h2>
                    <p>We're working hard to bring you interactive visualizations for:</p>
                    <ul>
                        <li>Hash Functions</li>
                        <li>Hash Tables</li>
                        <li>Collision Resolution</li>
                        <li>Chaining vs Open Addressing</li>
                        <li>Load Factor & Rehashing</li>
                    </ul>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
} 