import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    const algorithmCategories = [
        {
            path: '/sorting',
            title: 'Sorting Algorithms',
            description: 'Visualize bubble sort, merge sort, quick sort, and more sorting algorithms in action.',
            icon: '📊',
            color: 'bg-blue-500'
        },
        {
            path: '/searching',
            title: 'Searching Algorithms',
            description: 'Explore linear search, binary search, and other searching techniques.',
            icon: '🔍',
            color: 'bg-green-500'
        },
        {
            path: '/data-structures',
            title: 'Data Structures',
            description: 'Learn about arrays, linked lists, trees, graphs, and more data structures.',
            icon: '🏗️',
            color: 'bg-purple-500'
        },
        {
            path: '/hashing',
            title: 'Hashing',
            description: 'Understand hash tables, hash functions, and collision resolution.',
            icon: '🔐',
            color: 'bg-red-500'
        },
        {
            path: '/recursion',
            title: 'Recursion',
            description: 'Master recursive algorithms and understand the call stack.',
            icon: '🔄',
            color: 'bg-yellow-500'
        },
        {
            path: '/dynamic-programming',
            title: 'Dynamic Programming',
            description: 'Solve complex problems with optimal substructure and overlapping subproblems.',
            icon: '⚡',
            color: 'bg-indigo-500'
        },
        {
            path: '/greedy',
            title: 'Greedy Algorithms',
            description: 'Learn greedy approaches to optimization problems.',
            icon: '🎯',
            color: 'bg-pink-500'
        }
    ];

    return (
        <div className="landing-page">
            <div className="hero-section">
                <h1 className="hero-title">Welcome to Algorithm Visualizer</h1>
                <p className="hero-subtitle">
                    Interactive visualizations to help you understand algorithms and data structures
                </p>
            </div>

            <div className="categories-grid">
                {algorithmCategories.map((category) => (
                    <Link key={category.path} to={category.path} className="category-card">
                        <div className={`category-icon ${category.color}`}>
                            <span className="icon-text">{category.icon}</span>
                        </div>
                        <div className="category-content">
                            <h3 className="category-title">{category.title}</h3>
                            <p className="category-description">{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
} 