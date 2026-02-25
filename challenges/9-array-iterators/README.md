# Task Manager (Core Array Methods)

Implement a small set of utilities in [src/utils.js](src/utils.js) using the core array methods, then see them working in the UI.

## Run it

```bash
cd challenges/9-array-iterators
npm install
npm run dev
```

## What you implement (7 functions)

- `filterTasksByStatus` (`.filter()`)
- `getHighPriorityTasks` (`.filter()`)
- `formatTasksForDisplay` (`.map()`)
- `findTaskById` (`.find()`)
- `areAllTasksComplete` (`.every()`)
- `hasHighPriorityTasks` (`.some()`)
- `notifyIncompleteTasks` (`.forEach()`)

Open the app and watch the Introduction page tests turn green as you implement each TODO.

<!-- Legacy README (kept for reference)
## Learning Objectives

This project teaches you to:
- Master JavaScript array iterator methods (`.filter()`, `.map()`, `.reduce()`, `.forEach()`, `.find()`, `.some()`, `.every()`)
- Understand functional programming concepts
- Work with real-world data structures
- See immediate visual feedback as you implement functions
- Practice reading and implementing function specifications

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm, npm, or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Ensure you are within the correct directory

Your directory should look like this in the console:
```(your-file-path)\js-content\9. Choose the Correct Iterator\web-utils```

For example, if you were in the js-content folder, you would run these two commands:

```bash
cd 9. Choose the Correct Iterator
```

Then,

```bash
cd web-utils
```

3. Install further dependencies

```bash
npm i
```

4. Start the development server:

```bash
npm run dev
# or
pnpm dev
```

5. Open your browser to [http://localhost:3000](http://localhost:3000)

## How It Works

The app displays a live dashboard with various task management features. However, all the utility functions in `src/utils.js` need to be implemented by you!

### Your Workflow

1. **Visit the Introduction Page** - See all 16 utility functions you need to implement
2. **Choose a Function** - Click on any function card to see detailed instructions
3. **Open `src/utils.js`** - Implement the function following the TODO comments
4. **Watch Tests Pass** - The app automatically tests your implementation and shows ✅ or ❌
5. **See It Work** - Navigate to Dashboard, Tasks, or Stats pages to see your functions in action
6. **Filter Challenges** - Use difficulty filters (Easy/Medium/Hard) and category filters (Array Methods/Utilities)

### Test-Driven Development

Each function has 3-4 automated tests that run in the browser. Green checkmarks (✅) indicate passing tests, while red crosses (❌) show failing tests. You'll see immediate feedback as you code!

## Data Structure

### Task Object

All utility functions work with an array of task objects. Each task has the following structure:

```javascript
{
  id: number,           // Unique identifier
  title: string,        // Task title
  description: string,  // Detailed description
  priority: string,     // One of: 'high', 'medium', 'low'
  completed: boolean,   // Completion status
  tags: string[],       // Array of tag strings
  dueDate: string,      // Date in 'YYYY-MM-DD' format
  createdAt: string     // Date in 'YYYY-MM-DD' format
}
```

**Example:**

```javascript
{
  id: 1,
  title: 'Complete React Router setup',
  description: 'Set up routing for the task management app',
  priority: 'high',
  completed: true,
  tags: ['development', 'react', 'setup'],
  dueDate: '2025-11-20',
  createdAt: '2025-11-15'
}
```

### Priority Levels

- `'high'` - Urgent tasks requiring immediate attention
- `'medium'` - Important but not urgent tasks
- `'low'` - Nice-to-have tasks

### Date Format

All dates are stored as strings in ISO format: `'YYYY-MM-DD'` (e.g., `'2025-11-20'`)

[↑ Back to Top](#table-of-contents)

## Utility Functions Reference

All functions are located in `src/utils.js`. Implement them to make the app fully functional!

---

### `filterTasksByStatus(tasks, completed)`

Filters tasks based on their completion status.

**Parameters:**
- `tasks` (Array): Array of task objects
- `completed` (boolean): If `true`, return completed tasks; if `false`, return incomplete tasks

**Returns:**
- (Array): Filtered array containing only tasks matching the completion status

**Method to Use:** `.filter()`

**Example Usage:**
```javascript
const completedTasks = filterTasksByStatus(tasks, true);
const incompleteTasks = filterTasksByStatus(tasks, false);
```

**Behavior:**
- Should return a new array (does not mutate original)
- Returns empty array if no tasks match the criteria
- Each returned task should have `completed` property matching the parameter

---

### `getHighPriorityTasks(tasks)`

Returns all tasks with high priority.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (Array): Array containing only tasks where `priority === 'high'`

**Method to Use:** `.filter()`

**Example Usage:**
```javascript
const urgentTasks = getHighPriorityTasks(tasks);
```

**Behavior:**
- Returns a new array (does not mutate original)
- Returns empty array if no high priority tasks exist

---

### `filterTasksByPriority(tasks, priority)`

Filters tasks by a specific priority level.

**Parameters:**
- `tasks` (Array): Array of task objects
- `priority` (string): One of `'high'`, `'medium'`, or `'low'`

**Returns:**
- (Array): Array of tasks matching the specified priority

**Method to Use:** `.filter()`

**Example Usage:**
```javascript
const mediumTasks = filterTasksByPriority(tasks, 'medium');
```

**Behavior:**
- Returns a new array (does not mutate original)
- Returns empty array if no tasks match the priority

---

### `formatTasksForDisplay(tasks)`

Transforms task objects into human-readable strings.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (Array): Array of formatted strings

**Method to Use:** `.map()`

**Example Usage:**
```javascript
const displayStrings = formatTasksForDisplay(tasks);
// Returns: ["Task: Buy groceries (Priority: high)", ...]
```

**Format:**
- Each string should follow the pattern: `"Task: {title} (Priority: {priority})"`

**Behavior:**
- Returns a new array with same length as input
- Does not mutate original array

---

### `addUniqueTags(array, tags)`

Adds unique tags from a tags array to an existing array (helper function).

**Parameters:**
- `array` (Array): Array to add tags to (will be mutated)
- `tags` (Array): Array of tag strings to process

**Returns:**
- `undefined` (This function has side effects - it mutates the input array)

**Method to Use:** `.forEach()`

**Example Usage:**
```javascript
const myTags = ['work'];
addUniqueTags(myTags, ['work', 'urgent', 'personal']);
// myTags is now ['work', 'urgent', 'personal']
```

**Behavior:**
- Mutates the first parameter (array)
- Only adds tags that don't already exist in the array
- Does not return a value

---

### `getAllUniqueTags(tasks)`

Extracts all unique tags from all tasks.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (Array): Array of unique tag strings (no duplicates)

**Method to Use:** `.reduce()` (should call `addUniqueTags`)

**Example Usage:**
```javascript
const allTags = getAllUniqueTags(tasks);
// Returns: ['development', 'react', 'setup', 'javascript', 'arrays', ...]
```

**Behavior:**
- Returns a new array
- No duplicate tags in the result
- Order may vary
- Should utilize the `addUniqueTags` helper function

---

### `countCompletedTasks(tasks)`

Counts the total number of completed tasks.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (number): Count of tasks where `completed === true`

**Method to Use:** `.reduce()`

**Example Usage:**
```javascript
const completedCount = countCompletedTasks(tasks);
// Returns: 3
```

**Behavior:**
- Returns 0 if no tasks are completed
- Returns 0 for empty array

---

### `areAllTasksComplete(tasks)`

Checks if every task is completed.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (boolean): `true` if all tasks are completed, `false` otherwise

**Method to Use:** `.every()`

**Example Usage:**
```javascript
const allDone = areAllTasksComplete(tasks);
```

**Behavior:**
- Returns `true` for empty array (vacuous truth)
- Returns `false` if at least one task is incomplete

---

### `hasHighPriorityTasks(tasks)`

Checks if there is at least one high priority task.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (boolean): `true` if at least one task has `priority === 'high'`

**Method to Use:** `.some()`

**Example Usage:**
```javascript
const hasUrgent = hasHighPriorityTasks(tasks);
```

**Behavior:**
- Returns `false` for empty array
- Returns `true` as soon as first high priority task is found

---

### `findTaskById(tasks, id)`

Finds a task by its unique ID.

**Parameters:**
- `tasks` (Array): Array of task objects
- `id` (number): Task ID to search for

**Returns:**
- (Object|undefined): The task object if found, `undefined` if not found

**Method to Use:** `.find()`

**Example Usage:**
```javascript
const task = findTaskById(tasks, 5);
```

**Behavior:**
- Returns the first task where `task.id === id`
- Returns `undefined` if no match is found

---

### `notifyIncompleteTasks(tasks)`

Logs a reminder message for each incomplete task to the console.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- `undefined` (Side effect function - logs to console)

**Method to Use:** `.forEach()`

**Example Usage:**
```javascript
notifyIncompleteTasks(tasks);
// Console output:
// "Reminder: Complete 'Implement utility functions'"
// "Reminder: Complete 'Write unit tests'"
```

**Message Format:**
- `"Reminder: Complete '{task.title}'"`

**Behavior:**
- Only logs incomplete tasks (`completed === false`)
- Does not return a value
- Side effect: console.log() calls

---

### `calculateProductivityStats(tasks)`

Calculates comprehensive productivity statistics.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (Object): Object with the following properties:
  - `totalTasks` (number): Total number of tasks
  - `completedTasks` (number): Number of completed tasks
  - `completionRate` (number): Percentage of completed tasks (0-100), rounded to 2 decimals

**Methods to Use:** Multiple array methods

**Example Usage:**
```javascript
const stats = calculateProductivityStats(tasks);
// Returns: { totalTasks: 8, completedTasks: 3, completionRate: 37.50 }
```

**Behavior:**
- If `totalTasks` is 0, `completionRate` should be 0
- `completionRate` should be rounded to 2 decimal places
- Use `.filter()` to count completed tasks

---

### `groupTasksByPriority(tasks)`

Groups tasks into an object organized by priority level.

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (Object): Object with keys `'high'`, `'medium'`, `'low'`, each containing an array of tasks

**Method to Use:** `.reduce()`

**Example Usage:**
```javascript
const grouped = groupTasksByPriority(tasks);
// Returns:
// {
//   high: [task1, task2, task5],
//   medium: [task3, task6, task8],
//   low: [task4, task7]
// }
```

**Behavior:**
- Each priority level should have an array (even if empty)
- Original task objects are preserved (not copied)

---

### `sortTasksByPriorityAndStatus(tasks)`

Sorts tasks by priority (high → medium → low) and then by completion status (incomplete first).

**Parameters:**
- `tasks` (Array): Array of task objects

**Returns:**
- (Array): New sorted array

**Method to Use:** `.sort()` (with spread operator to avoid mutation)

**Example Usage:**
```javascript
const sorted = sortTasksByPriorityAndStatus(tasks);
```

**Sort Order:**
1. High priority incomplete tasks
2. High priority completed tasks
3. Medium priority incomplete tasks
4. Medium priority completed tasks
5. Low priority incomplete tasks
6. Low priority completed tasks

**Behavior:**
- Does NOT mutate the original array (create a copy first with `[...tasks]`)
- Use a priority value map: `{ high: 3, medium: 2, low: 1 }`

---

### `formatDate(dateString)`

Formats a date string from ISO format to a human-readable format with ordinal suffixes.

**Parameters:**
- `dateString` (string): Date in `'YYYY-MM-DD'` format (e.g., `'2025-12-13'`)

**Returns:**
- (string): Formatted date string (e.g., `'13th Dec 2025'`)

**Methods to Use:** String methods and Date API

**Example Usage:**
```javascript
formatDate('2025-12-01');  // Returns: '1st Dec 2025'
formatDate('2025-12-02');  // Returns: '2nd Dec 2025'
formatDate('2025-12-03');  // Returns: '3rd Dec 2025'
formatDate('2025-12-13');  // Returns: '13th Dec 2025'
formatDate('2025-12-21');  // Returns: '21st Dec 2025'
```

**Ordinal Suffix Rules:**
- `1, 21, 31` → `'st'`
- `2, 22` → `'nd'`
- `3, 23` → `'rd'`
- `11, 12, 13` → `'th'` (special case!)
- All others → `'th'`

**Month Abbreviations:**
`['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']`

**Behavior:**
- Parse date using `new Date(dateString)`
- Extract day, month, year
- Apply correct ordinal suffix
- Return formatted string

---

### `isRouteActive(routePath, currentPath)`

Checks if a route path matches the current URL path (used for navigation highlighting).

**Parameters:**
- `routePath` (string): The route to check (e.g., `'/'`, `'/dashboard'`, `'/tasks'`)
- `currentPath` (string): The current browser path (e.g., `'/'`, `'/tasks/123'`)

**Returns:**
- (boolean): `true` if the route matches, `false` otherwise

**Methods to Use:** String comparison methods

**Example Usage:**
```javascript
isRouteActive('/', '/');               // Returns: true
isRouteActive('/', '/dashboard');      // Returns: false
isRouteActive('/dashboard', '/dashboard');  // Returns: true
isRouteActive('/tasks', '/tasks/123');      // Returns: true
```

**Matching Rules:**
- Home route (`'/'`) must match exactly
- Other routes match if `currentPath` starts with `routePath`

**Behavior:**
- Use strict equality (`===`) for home route
- Use `.startsWith()` for other routes

---

[↑ Back to Top](#table-of-contents)

## Application Features

Once you implement the utility functions, you'll unlock these features:

### Introduction Page (`/`)
- Dashboard with all 16 utility functions
- Live test results for each function
- Difficulty and category filters
- Detailed instructions in modal windows

### Dashboard (`/dashboard`)
- Priority statistics with visual bars
- Completion rate circle progress
- High priority task alerts
- Uses: `groupTasksByPriority`, `getHighPriorityTasks`, `calculateProductivityStats`

### All Tasks (`/tasks`)
- Complete task list
- Filter by priority and status
- Sort tasks
- Uses: `filterTasksByStatus`, `filterTasksByPriority`, `sortTasksByPriorityAndStatus`

### Statistics (`/stats`)
- Task timeline with formatted dates
- Priority breakdown
- Completion statistics
- Uses: `formatDate`, `calculateProductivityStats`, `groupTasksByPriority`

### Tags Page (`/tags`)
- All unique tags extracted from tasks
- Task count per tag
- Uses: `getAllUniqueTags`, `filterTasksByStatus`

[↑ Back to Top](#table-of-contents)

## Testing Your Code

The app includes built-in tests that run automatically. You can also:

1. **Check the Console** - Open browser DevTools to see `notifyIncompleteTasks` output
2. **Navigate Pages** - See your functions in action across different views
3. **Watch Live Updates** - The UI updates immediately as you save your code

## Tips

- Start with Easy difficulty functions (`.filter()`, `.some()`, `.every()`, `.find()`)
- Read the function specifications carefully
- Check the data structure - know what properties tasks have
- Test edge cases (empty arrays, no matches, etc.)
- Use the hints in the TODO comments
- Click function cards for detailed instructions and examples

[↑ Back to Top](#table-of-contents)

## Challenge Completion

You've mastered this challenge when:
- ✅ All 16 functions are implemented
- ✅ All tests are passing (green checkmarks)
- ✅ All pages display data correctly
- ✅ No undefined/null errors in the console

## Additional Resources

- [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript.info: Array Methods](https://javascript.info/array-methods)

[↑ Back to Top](#table-of-contents)

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

**Happy Coding!**

Master array iterators by building something real. Watch your code come to life!

-->
