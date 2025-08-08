import React from 'react';
import { motion } from 'framer-motion';
import './SortingElement.css';

const SortingElement = ({ value, index, isAnimating = false, animationDelay = 0 }) => {
    return (
        <motion.div
            className={`sorting-element ${isAnimating ? 'animating' : ''}`}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: isAnimating ? 1.1 : 1 }}
            transition={{
                duration: 0.3,
                delay: animationDelay,
                ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
            layout
        >
            <span className="element-value">{value}</span>
        </motion.div>
    );
};

export default SortingElement;
