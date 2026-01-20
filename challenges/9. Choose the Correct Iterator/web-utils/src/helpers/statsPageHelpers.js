/**
 * Helper functions for StatsPage
 */

import { PRIORITY_COLORS } from '../constants/colors';

/**
 * Get color for priority level
 * @param {string} priority - 'high', 'medium', or 'low'
 * @returns {string} Hex color code
 */
export const getPriorityColor = (priority) => {
  return PRIORITY_COLORS[priority] || PRIORITY_COLORS.default;
};

/**
 * Calculate completion rate for a group of tasks
 * @param {Array} tasks - Array of tasks
 * @returns {string} Completion rate as percentage string
 */
export const calculateCompletionRate = (tasks) => {
  const completed = tasks.filter(t => t.completed);
  return tasks.length > 0 
    ? ((completed.length / tasks.length) * 100).toFixed(1)
    : '0';
};

/**
 * Get the oldest task from array
 * @param {Array} tasks - Array of tasks
 * @returns {string|null} Created date of oldest task (YYYY-MM-DD format)
 */
export const getOldestTask = (tasks) => {
  if (tasks.length === 0) return null;
  return [...tasks].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0]?.createdAt;
};

/**
 * Get the newest task from array
 * @param {Array} tasks - Array of tasks
 * @returns {string|null} Created date of newest task (YYYY-MM-DD format)
 */
export const getNewestTask = (tasks) => {
  if (tasks.length === 0) return null;
  return [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]?.createdAt;
};

/**
 * Get next due date from incomplete tasks
 * @param {Array} incompleteTasks - Array of incomplete tasks
 * @returns {string} Due date (YYYY-MM-DD format) or 'None'
 */
export const getNextDueDate = (incompleteTasks) => {
  if (incompleteTasks.length === 0) return 'None';
  return [...incompleteTasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0]?.dueDate || 'None';
};
