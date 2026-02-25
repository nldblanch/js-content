// Task Management Utilities
// These functions will be used by a React app to manage tasks

/**
 * Filters tasks by their completion status
 * @param {Array} tasks - Array of task objects
 * @param {boolean} completed - Whether to filter for completed or incomplete tasks
 * @returns {Array} Filtered array of tasks
 */
export function filterTasksByStatus(tasks, completed) {
    // TODO: Use .filter() to return tasks matching the completion status
    // Example: return tasks.filter(task => task.completed === completed);
}

/**
 * Gets all tasks with high priority
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of high priority tasks
 */
export function getHighPriorityTasks(tasks) {
    // TODO: Use .filter() to return only tasks where priority === 'high'
}

/**
 * Transforms tasks into display strings
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of formatted task strings
 */
export function formatTasksForDisplay(tasks) {
  // TODO: Use .map() to create strings like "Task: Buy groceries (Priority: high)"
}

/**
 * Checks if all tasks are completed
 * @param {Array} tasks - Array of task objects
 * @returns {boolean} True if all tasks are completed
 */
export function areAllTasksComplete(tasks) {
    // TODO: Use .every() to check if all tasks have completed === true
}

/**
 * Checks if there are any high priority tasks
 * @param {Array} tasks - Array of task objects
 * @returns {boolean} True if at least one task has priority === 'high'
 */
export function hasHighPriorityTasks(tasks) {
    // TODO: Use .some() to check if any task has high priority
}

/**
 * Finds a task by its ID
 * @param {Array} tasks - Array of task objects
 * @param {number} id - Task ID to find
 * @returns {Object|undefined} The task object or undefined if not found
 */
export function findTaskById(tasks, id) {
    // TODO: Use .find() to locate the task with matching id
}

/**
 * Sends a notification for each incomplete task
 * @param {Array} tasks - Array of task objects
 * @returns {undefined} No return value (side effect function)
 */
export function notifyIncompleteTasks(tasks) {
  // TODO: Use .forEach() to console.log a reminder for each incomplete task
  // Example output: "Reminder: Complete 'Buy groceries'"
}
