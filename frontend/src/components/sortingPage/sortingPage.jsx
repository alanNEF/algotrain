import React, { useState, useEffect } from 'react';
import SortingArray from '../sortingArray/SortingArray';
import './sortingPage.css';

export default function SortingPage() {
    const [array, setArray] = useState([5, 3, 8, 4, 2]);
    const [algorithm, setAlgorithm] = useState('bubble');
    const [solution, setSolution] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);

    // Mock solution for demonstration - replace with actual API call
    const generateMockSolution = (arr, algo) => {
        const steps = [];
        const arrCopy = [...arr];

        if (algo === 'bubble') {
            // Simple bubble sort steps
            for (let i = 0; i < arrCopy.length - 1; i++) {
                for (let j = 0; j < arrCopy.length - i - 1; j++) {
                    if (arrCopy[j] > arrCopy[j + 1]) {
                        steps.push({
                            item: arrCopy[j],
                            pos: [j, j + 1]
                        });
                        steps.push({
                            item: arrCopy[j + 1],
                            pos: [j + 1, j]
                        });
                        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
                    }
                }
            }
        }

        return { steps };
    };

    const handleAlgorithmChange = (newAlgorithm) => {
        setAlgorithm(newAlgorithm);
        setSolution(null);
        setIsPlaying(false);
        setCurrentStep(0);
    };

    const handleGenerateSolution = () => {
        const newSolution = generateMockSolution(array, algorithm);
        setSolution(newSolution);
        setTotalSteps(newSolution.steps.length);
        setCurrentStep(0);
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        if (!solution) return;
        setIsPlaying(!isPlaying);
    };

    const handleStepChange = (step, total) => {
        setCurrentStep(step);
        setTotalSteps(total);
    };

    const handleAnimationComplete = () => {
        setIsPlaying(false);
    };

    const handleArrayChange = (newArray) => {
        setArray(newArray);
        setSolution(null);
        setIsPlaying(false);
        setCurrentStep(0);
    };

    return (
        <div className="sorting-page">
            <div className="sorting-header">
                <h1>Sorting Visualizer</h1>
                <p>Watch sorting algorithms in action with smooth animations</p>
            </div>

            <div className="sorting-controls-panel">
                <div className="control-group">
                    <label htmlFor="algorithm">Algorithm:</label>
                    <select
                        id="algorithm"
                        value={algorithm}
                        onChange={(e) => handleAlgorithmChange(e.target.value)}
                        className="algorithm-select"
                    >
                        <option value="bubble">Bubble Sort</option>
                        <option value="selection">Selection Sort</option>
                        <option value="insertion">Insertion Sort</option>
                        <option value="merge">Merge Sort</option>
                        <option value="quick">Quick Sort</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Array:</label>
                    <div className="array-input">
                        <input
                            type="text"
                            value={array.join(', ')}
                            onChange={(e) => {
                                const newArray = e.target.value
                                    .split(',')
                                    .map(s => parseInt(s.trim()))
                                    .filter(n => !isNaN(n));
                                if (newArray.length > 0) {
                                    handleArrayChange(newArray);
                                }
                            }}
                            placeholder="Enter numbers separated by commas"
                            className="array-input-field"
                        />
                    </div>
                </div>

                <div className="control-group">
                    <button
                        onClick={handleGenerateSolution}
                        disabled={!array.length}
                        className="generate-btn"
                    >
                        Generate Solution
                    </button>

                    {solution && (
                        <button
                            onClick={handlePlayPause}
                            className={`play-btn ${isPlaying ? 'pause' : 'play'}`}
                        >
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    )}
                </div>
            </div>

            <SortingArray
                initialArray={array}
                solution={solution}
                isPlaying={isPlaying}
                onStepChange={handleStepChange}
                onAnimationComplete={handleAnimationComplete}
            />

            {solution && (
                <div className="solution-info">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                    <div className="progress-text">
                        {currentStep} / {totalSteps} steps completed
                    </div>
                </div>
            )}
        </div>
    );
}