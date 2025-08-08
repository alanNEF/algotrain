import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SortingElement from '../sortingElement/SortingElement';
import './SortingArray.css';

const SortingArray = ({ 
  initialArray = [5, 3, 8, 4, 2], 
  solution = null, 
  onStepChange = null,
  isPlaying = false,
  onAnimationComplete = null 
}) => {
  const [array, setArray] = useState(initialArray);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingElements, setAnimatingElements] = useState(new Set());

  // Reset array when initialArray changes
  useEffect(() => {
    setArray([...initialArray]);
    setCurrentStep(0);
    setAnimatingElements(new Set());
  }, [initialArray]);

  // Animation logic for playing through solution steps
  useEffect(() => {
    if (!isPlaying || !solution || !solution.steps || currentStep >= solution.steps.length) {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
      return;
    }

    const step = solution.steps[currentStep];
    if (!step) return;

    setIsAnimating(true);
    setAnimatingElements(new Set([step.item]));

    // Animate the step
    const timer = setTimeout(() => {
      // Update array based on the step
      const newArray = [...array];
      const [currentPos, newPos] = step.pos;
      
      if (currentPos !== newPos) {
        // Swap elements
        [newArray[currentPos], newArray[newPos]] = [newArray[newPos], newArray[currentPos]];
        setArray(newArray);
      }

      setAnimatingElements(new Set());
      setIsAnimating(false);
      setCurrentStep(prev => prev + 1);
      
      if (onStepChange) {
        onStepChange(currentStep + 1, solution.steps.length);
      }
    }, 800); // Animation duration

    return () => clearTimeout(timer);
  }, [isPlaying, solution, currentStep, array, onStepChange, onAnimationComplete]);

  // Handle manual step progression
  const goToStep = useCallback((stepIndex) => {
    if (!solution || !solution.steps) return;
    
    setCurrentStep(stepIndex);
    setAnimatingElements(new Set());
    setIsAnimating(false);
    
    // Reconstruct array up to this step
    const newArray = [...initialArray];
    for (let i = 0; i < stepIndex; i++) {
      const step = solution.steps[i];
      if (step && step.pos.length >= 2) {
        const [currentPos, newPos] = step.pos;
        if (currentPos !== newPos) {
          [newArray[currentPos], newArray[newPos]] = [newArray[newPos], newArray[currentPos]];
        }
      }
    }
    setArray(newArray);
  }, [solution, initialArray]);

  // Reset to initial state
  const reset = useCallback(() => {
    setArray([...initialArray]);
    setCurrentStep(0);
    setAnimatingElements(new Set());
    setIsAnimating(false);
  }, [initialArray]);

  return (
    <div className="sorting-array-container">
      <motion.div 
        className="sorting-array"
        layout
      >
        <AnimatePresence mode="popLayout">
          {array.map((value, index) => (
            <motion.div
              key={`${value}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <SortingElement
                value={value}
                index={index}
                isAnimating={animatingElements.has(value)}
                animationDelay={0}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Controls */}
      {solution && solution.steps && (
        <div className="sorting-controls">
          <div className="step-info">
            Step {currentStep + 1} of {solution.steps.length}
          </div>
          <div className="control-buttons">
            <button 
              onClick={reset}
              disabled={isAnimating}
              className="control-btn reset-btn"
            >
              Reset
            </button>
            <button 
              onClick={() => goToStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0 || isAnimating}
              className="control-btn prev-btn"
            >
              Previous
            </button>
            <button 
              onClick={() => goToStep(Math.min(solution.steps.length - 1, currentStep + 1))}
              disabled={currentStep >= solution.steps.length - 1 || isAnimating}
              className="control-btn next-btn"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortingArray;
