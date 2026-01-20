/**
 * Frontend utility functions for the Introduction page
 * These are separate from the student challenge functions
 */

import { UI_COLORS } from '../constants/colors';

/**
 * Parse text with [code] syntax and return JSX with styled inline code
 * @param {string} text - Text with [code] markers
 * @returns {Array} Array of text and JSX elements
 */
export const parseCodeInText = (text) => {
  const parts = text.split(/(\[.*?\])/g);
  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const code = part.slice(1, -1);
      return (
        <span 
          key={index} 
          style={{ 
            backgroundColor: UI_COLORS.neutral.background, 
            padding: '2px 6px', 
            borderRadius: '3px',
            fontFamily: 'monospace',
            fontSize: '0.95em'
          }}
        >
          {code}
        </span>
      );
    }
    return part;
  });
};

/**
 * Run all tests for a given utility function
 * @param {Object} util - Utility function test object
 * @returns {Array} Array of test results with name and passed status
 */
export const runAllTests = (util) => {
  return util.tests.map(test => ({
    name: test.name,
    passed: test.run()
  }));
};

/**
 * Get color for difficulty badge
 * @param {string} difficulty - 'Easy', 'Medium', or 'Hard'
 * @returns {string} Hex color code
 */
export const getDifficultyColor = (difficulty) => {
  const { DIFFICULTY_COLORS } = require('../constants/colors');
  return DIFFICULTY_COLORS[difficulty] || UI_COLORS.neutral.accent;
};

/**
 * Calculate overall test progress
 * @param {Array} results - Array of test results
 * @returns {Object} Object with totalTests and passedTests counts
 */
export const calculateProgress = (results) => {
  const totalTests = results.reduce((sum, util) => sum + util.testResults.length, 0);
  const passedTests = results.reduce((sum, util) => 
    sum + util.testResults.filter(t => t.passed).length, 0
  );
  return { totalTests, passedTests };
};
