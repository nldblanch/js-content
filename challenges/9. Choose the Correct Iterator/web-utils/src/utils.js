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
    const callbackFn = (task) => {
        // your code here...
    };
    return tasks.filter(callbackFn);
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
 * Adds unique tags from a tags array to an array
 * @param {Array} array - Array to add unique tags to
 * @param {Array} tags - Array of tag strings to process
 * @returns {undefined} No return value (mutates array)
 */
export function addUniqueTags(array, tags) {
    // TODO: Use .forEach() to add each tag to the array only if it's not already included
    // Hint: Use .includes() to check if tag already exists
}

/**
 * Extracts all unique tags from all tasks
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of unique tag strings
 */
export function getAllUniqueTags(tasks) {
    // TODO: Use .reduce() to collect all tags from all tasks
    // Call your addUniqueTags function to add each task's tags to the accumulator
    // Hint: Each task has a tags array
}

/**
 * Calculates total number of completed tasks
 * @param {Array} tasks - Array of task objects
 * @returns {number} Count of completed tasks
 */
export function countCompletedTasks(tasks) {
    // TODO: Use .reduce() to count tasks where completed === true
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

/**
 * Calculates productivity statistics
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Object with completionRate and totalTasks
 */
export function calculateProductivityStats(tasks) {
    // TODO: Use multiple iterator methods to calculate:
    // - totalTasks (length)
    // - completedTasks (use .filter() and .length)
    // - completionRate (completed / total * 100, rounded to 2 decimals)
}

/**
 * Gets tasks grouped by priority
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Object with keys 'high', 'medium', 'low' containing task arrays
 */
export function groupTasksByPriority(tasks) {
    // TODO: Use .reduce() to create an object like:
    // { high: [...], medium: [...], low: [...] }
    const callbackFn = (accumulator, task) => {
        // your code here...
    }

    return tasks.reduce(callbackFn, { high: [], medium: [], low: [] });
}

/**
 * Sorts tasks by priority (high -> medium -> low) and then by completion status
 * @param {Array} tasks - Array of task objects
 * @returns {Array} New sorted array (don't mutate original)
 */
export function sortTasksByPriorityAndStatus(tasks) {
    // TODO: Create a copy with spread operator, then use .sort()
    // Priority order: high (3) > medium (2) > low (1)
    // Incomplete tasks should come before completed tasks
    const priorityValue = { high: 3, medium: 2, low: 1 };
    // your code here...
}

/**
 * Filters tasks by priority level
 * @param {Array} tasks - Array of task objects
 * @param {string} priority - Priority level to filter by ('high', 'medium', or 'low')
 * @returns {Array} Filtered array of tasks with matching priority
 */
export function filterTasksByPriority(tasks, priority) {
    // TODO: Use .filter() to return only tasks matching the given priority
}

/**
 * Formats a date string from YYYY-MM-DD to a readable format like "13th Dec 2025"
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string with ordinal suffix (e.g., "1st Jan 2026")
 */
export function formatDate(dateString) {
    // TODO: Parse the date string and format it with ordinal suffix
    // Hint: Create a helper to get ordinal suffixes (1st, 2nd, 3rd, 4th, etc.)
    // Example: "2025-12-13" should become "13th Dec 2025"
}

/**
 * Checks if a given route path matches the current URL path
 * @param {string} routePath - The route path to check (e.g., '/dashboard', '/tasks')
 * @param {string} currentPath - The current URL path from the browser
 * @returns {boolean} True if the route matches, false otherwise
 */
export function isRouteActive(routePath, currentPath) {
    // TODO: Implement route matching logic
    // 1. For the home route ('/'), return true only if currentPath is exactly '/'
    // 2. For other routes, return true if currentPath starts with the routePath
    // Examples:
    //   isRouteActive('/', '/') should return true
    //   isRouteActive('/', '/dashboard') should return false
    //   isRouteActive('/dashboard', '/dashboard') should return true
    //   isRouteActive('/tasks', '/tasks/123') should return true
}
