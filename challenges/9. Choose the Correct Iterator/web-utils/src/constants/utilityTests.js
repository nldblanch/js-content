import * as utils from '../utils';
import { initialTasks } from '../data';

const testTasks = initialTasks;
const sampleTask = testTasks[0];

export const utilityTests = [
  {
    name: 'filterTasksByStatus',
    description: 'Filters tasks by completion status (completed or incomplete)',
    difficulty: 'Easy',
    method: '.filter()',
    tests: [
      {
        name: 'Returns only completed tasks when completed=true',
        run: () => {
          const result = utils.filterTasksByStatus(testTasks, true);
          return result && Array.isArray(result) && result.every(t => t.completed === true);
        }
      },
      {
        name: 'Returns only incomplete tasks when completed=false',
        run: () => {
          const result = utils.filterTasksByStatus(testTasks, false);
          return result && Array.isArray(result) && result.every(t => t.completed === false);
        }
      },
      {
        name: 'Returns array (not undefined)',
        run: () => {
          const result = utils.filterTasksByStatus(testTasks, true);
          return result !== undefined && Array.isArray(result);
        }
      }
    ],
    instructions: {
      objective: 'Filter an array of tasks based on their completion status',
      hints: [
        'Use the [.filter()] method to return tasks that match the condition',
        'Check if [task.completed] equals the [completed] parameter',
        'Remember to return the filtered array'
      ],
      example: `function filterTasksByStatus(tasks, completed) {
  return tasks.filter(task => task.completed === completed);
}`,
      tips: [
        'The [filter] method creates a new array with elements that pass the test',
        'Your callback function should return [true/false]',
        'Compare [task.completed] with the [completed] parameter using [===]'
      ]
    }
  },
  {
    name: 'getHighPriorityTasks',
    description: 'Returns all tasks with high priority',
    difficulty: 'Easy',
    method: '.filter()',
    tests: [
      {
        name: 'Returns only high priority tasks',
        run: () => {
          const result = utils.getHighPriorityTasks(testTasks);
          return result && Array.isArray(result) && result.every(t => t.priority === 'high');
        }
      },
      {
        name: 'Returns all high priority tasks (count check)',
        run: () => {
          const result = utils.getHighPriorityTasks(testTasks);
          const expected = testTasks.filter(t => t.priority === 'high').length;
          return result && result.length === expected;
        }
      },
      {
        name: 'Returns array (not undefined)',
        run: () => {
          const result = utils.getHighPriorityTasks(testTasks);
          return result !== undefined && Array.isArray(result);
        }
      }
    ],
    instructions: {
      objective: 'Filter tasks to return only those with priority === "high"',
      hints: [
        'Similar to filterTasksByStatus but checking priority instead',
        'Use .filter() to check if task.priority === "high"',
        'No need for a parameter - always filter for "high"'
      ],
      example: `function getHighPriorityTasks(tasks) {
  return tasks.filter(task => task.priority === 'high');
}`,
      tips: [
        'This is a simpler version of filterTasksByStatus',
        'You only need to check one condition: priority === "high"'
      ]
    }
  },
  {
    name: 'filterTasksByPriority',
    description: 'Filters tasks by a specific priority level',
    difficulty: 'Easy',
    method: '.filter()',
    tests: [
      {
        name: 'Returns only high priority tasks when priority="high"',
        run: () => {
          const result = utils.filterTasksByPriority(testTasks, 'high');
          return result && Array.isArray(result) && result.every(t => t.priority === 'high');
        }
      },
      {
        name: 'Returns only medium priority tasks when priority="medium"',
        run: () => {
          const result = utils.filterTasksByPriority(testTasks, 'medium');
          return result && Array.isArray(result) && result.every(t => t.priority === 'medium');
        }
      },
      {
        name: 'Returns only low priority tasks when priority="low"',
        run: () => {
          const result = utils.filterTasksByPriority(testTasks, 'low');
          return result && Array.isArray(result) && result.every(t => t.priority === 'low');
        }
      }
    ],
    instructions: {
      objective: 'Filter tasks by any priority level (high, medium, or low)',
      hints: [
        'Takes two parameters: tasks and priority',
        'Use .filter() to compare task.priority with the priority parameter',
        'Similar pattern to filterTasksByStatus'
      ],
      example: `function filterTasksByPriority(tasks, priority) {
  return tasks.filter(task => task.priority === priority);
}`,
      tips: [
        'This is a generic version of getHighPriorityTasks',
        'Works for any priority value passed in'
      ]
    }
  },
  {
    name: 'formatTasksForDisplay',
    description: 'Transforms tasks into formatted display strings',
    difficulty: 'Easy',
    method: '.map()',
    tests: [
      {
        name: 'Returns array of strings',
        run: () => {
          const result = utils.formatTasksForDisplay(testTasks);
          return result && Array.isArray(result) && result.every(item => typeof item === 'string');
        }
      },
      {
        name: 'Strings contain task title',
        run: () => {
          const result = utils.formatTasksForDisplay(testTasks);
          return result && result[0] && result[0].includes(testTasks[0].title);
        }
      },
      {
        name: 'Strings contain priority level',
        run: () => {
          const result = utils.formatTasksForDisplay(testTasks);
          return result && result[0] && result[0].includes(testTasks[0].priority);
        }
      }
    ],
    instructions: {
      objective: 'Transform each task into a formatted string like "Task: Buy groceries (Priority: high)"',
      hints: [
        'Use [.map()] to transform each task',
        'Return a template string with [task.title] and [task.priority]',
        'Use backticks for template literals: [`Task: ${task.title}`]'
      ],
      example: `function formatTasksForDisplay(tasks) {
  return tasks.map(task => \`Task: \${task.title} (Priority: \${task.priority})\`);
}`,
      tips: [
        '[.map()] transforms each element into something new',
        'Template literals make string formatting easy',
        'The format should be: "Task: [title] (Priority: [priority])"'
      ]
    }
  },
  {
    name: 'countCompletedTasks',
    description: 'Counts the total number of completed tasks',
    difficulty: 'Medium',
    method: '.reduce()',
    tests: [
      {
        name: 'Returns a number',
        run: () => {
          const result = utils.countCompletedTasks(testTasks);
          return typeof result === 'number';
        }
      },
      {
        name: 'Returns correct count of completed tasks',
        run: () => {
          const result = utils.countCompletedTasks(testTasks);
          const expected = testTasks.filter(t => t.completed).length;
          return result === expected;
        }
      },
      {
        name: 'Returns 0 for empty array',
        run: () => {
          const result = utils.countCompletedTasks([]);
          return result === 0;
        }
      }
    ],
    instructions: {
      objective: 'Count how many tasks are completed using [.reduce()]',
      hints: [
        'Use [.reduce()] to accumulate a count',
        'Start with [0] as the initial value',
        'Add [1] to count if [task.completed] is true'
      ],
      example: `function countCompletedTasks(tasks) {
  return tasks.reduce((count, task) => {
    return task.completed ? count + 1 : count;
  }, 0);
}`,
      tips: [
        '[.reduce()] takes an accumulator [(count)] and each item [(task)]',
        'The second parameter to reduce is the starting value [(0)]',
        'Use ternary operator: [condition ? ifTrue : ifFalse]'
      ]
    }
  },
  {
    name: 'addUniqueTags',
    description: 'Adds unique tags from a tags array to an array',
    difficulty: 'Easy',
    method: '.forEach()',
    tests: [
      {
        name: 'Adds all unique tags to array',
        run: () => {
          const array = [];
          const tags = ['work', 'urgent', 'personal'];
          utils.addUniqueTags(array, tags);
          return array.length === 3 && 
                 array.includes('work') && 
                 array.includes('urgent') && 
                 array.includes('personal');
        }
      },
      {
        name: 'Does not add duplicate tags',
        run: () => {
          const array = ['work', 'urgent'];
          const tags = ['urgent', 'personal', 'work'];
          utils.addUniqueTags(array, tags);
          return array.length === 3 && array.includes('personal');
        }
      },
      {
        name: 'Mutates array (does not return a value)',
        run: () => {
          const array = [];
          const tags = ['test'];
          const result = utils.addUniqueTags(array, tags);
          return result === undefined && array.length === 1;
        }
      }
    ],
    instructions: {
      objective: 'Use .forEach() to add unique tags to an array',
      hints: [
        'Use [.forEach()] to iterate through the tags array',
        'Check if tag is already in array using [.includes()]',
        'Only [.push()] the tag if it is not already included',
        'This function should mutate the array, not return anything'
      ],
      example: `function addUniqueTags(array, tags) {
  tags.forEach(tag => {
    if (!array.includes(tag)) {
      array.push(tag);
    }
  });
}`,
      tips: [
        '[.forEach()] is used for side effects (mutations), not for returning values',
        '[.includes()] returns true if an element exists in the array',
        'This helper function will be used by getAllUniqueTags'
      ]
    }
  },
  {
    name: 'getAllUniqueTags',
    description: 'Extracts all unique tags from all tasks',
    difficulty: 'Hard',
    method: '.reduce()',
    tests: [
      {
        name: 'Returns an array',
        run: () => {
          const result = utils.getAllUniqueTags(testTasks);
          return result !== undefined && Array.isArray(result);
        }
      },
      {
        name: 'Contains only unique tags (no duplicates)',
        run: () => {
          const result = utils.getAllUniqueTags(testTasks);
          if (!result) return false;
          return result.length === new Set(result).size;
        }
      },
      {
        name: 'Contains all tags from all tasks',
        run: () => {
          const result = utils.getAllUniqueTags(testTasks);
          if (!result) return false;
          const allTags = new Set();
          testTasks.forEach(t => t.tags.forEach(tag => allTags.add(tag)));
          return result.length === allTags.size;
        }
      }
    ],
    instructions: {
      objective: 'Use .reduce() to collect all tags from all tasks by calling your addUniqueTags function',
      hints: [
        'Use [.reduce()] with an empty array [[]] as the initial value',
        'For each task, call [addUniqueTags(acc, task.tags)]',
        'Remember to return the accumulator in your callback',
        'The [addUniqueTags] function handles the uniqueness logic'
      ],
      example: `function getAllUniqueTags(tasks) {
  return tasks.reduce((acc, task) => {
    addUniqueTags(acc, task.tags);
    return acc;
  }, []);
}`,
      tips: [
        'This combines [.reduce()] with your [addUniqueTags] helper',
        'Let [addUniqueTags] handle adding unique tags, you just call it',
        'Make sure to return the accumulator from the reduce callback'
      ]
    }
  },
  {
    name: 'calculateProductivityStats',
    description: 'Calculates completion statistics',
    difficulty: 'Medium',
    method: '.filter() + .reduce()',
    tests: [
      {
        name: 'Returns an object',
        run: () => {
          const result = utils.calculateProductivityStats(testTasks);
          return result && typeof result === 'object' && !Array.isArray(result);
        }
      },
      {
        name: 'Object has totalTasks, completedTasks, completionRate',
        run: () => {
          const result = utils.calculateProductivityStats(testTasks);
          return result && 'totalTasks' in result && 'completedTasks' in result && 'completionRate' in result;
        }
      },
      {
        name: 'Calculates correct completion rate',
        run: () => {
          const result = utils.calculateProductivityStats(testTasks);
          if (!result) return false;
          const expected = parseFloat(((result.completedTasks / result.totalTasks) * 100).toFixed(2));
          return Math.abs(result.completionRate - expected) < 0.01;
        }
      }
    ],
    instructions: {
      objective: 'Calculate productivity statistics: total, completed count, and completion rate',
      hints: [
        'Return an object with three properties',
        'totalTasks is just tasks.length',
        'Use .filter() to count completed tasks',
        'Calculate rate: (completed / total) * 100',
        'Use .toFixed(2) to round to 2 decimals, then parseFloat()'
      ],
      example: `function calculateProductivityStats(tasks) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionRate = totalTasks === 0 
    ? 0 
    : parseFloat(((completedTasks / totalTasks) * 100).toFixed(2));
  return { totalTasks, completedTasks, completionRate };
}`,
      tips: [
        'Handle division by zero (empty array)',
        'parseFloat() converts string back to number',
        'Object property shorthand: { totalTasks } = { totalTasks: totalTasks }'
      ]
    }
  },
  {
    name: 'groupTasksByPriority',
    description: 'Groups tasks into an object by priority level',
    difficulty: 'Hard',
    method: '.reduce()',
    tests: [
      {
        name: 'Returns an object',
        run: () => {
          const result = utils.groupTasksByPriority(testTasks);
          return result && typeof result === 'object' && !Array.isArray(result);
        }
      },
      {
        name: 'Has high, medium, low keys',
        run: () => {
          const result = utils.groupTasksByPriority(testTasks);
          return result && 'high' in result && 'medium' in result && 'low' in result;
        }
      },
      {
        name: 'Groups tasks correctly by priority',
        run: () => {
          const result = utils.groupTasksByPriority(testTasks);
          if (!result) return false;
          return result.high.every(t => t.priority === 'high') &&
                 result.medium.every(t => t.priority === 'medium') &&
                 result.low.every(t => t.priority === 'low');
        }
      }
    ],
    instructions: {
      objective: 'Create an object with high, medium, low keys, each containing an array of matching tasks',
      hints: [
        'Use .reduce() starting with { high: [], medium: [], low: [] }',
        'Push each task into the appropriate array',
        'Use task.priority as the key: acc[task.priority].push(task)'
      ],
      example: `function groupTasksByPriority(tasks) {
  return tasks.reduce((acc, task) => {
    acc[task.priority].push(task);
    return acc;
  }, { high: [], medium: [], low: [] });
}`,
      tips: [
        'Bracket notation lets you use variables as keys: obj[variable]',
        'Initialize the object with all three priority keys',
        '.reduce() builds up the object with each iteration'
      ]
    }
  },
  {
    name: 'sortTasksByPriorityAndStatus',
    description: 'Sorts tasks by priority then by completion status',
    difficulty: 'Hard',
    method: '.sort()',
    tests: [
      {
        name: 'Returns an array',
        run: () => {
          const result = utils.sortTasksByPriorityAndStatus(testTasks);
          return result !== undefined && Array.isArray(result);
        }
      },
      {
        name: 'Does not mutate original array',
        run: () => {
          const original = [...testTasks];
          utils.sortTasksByPriorityAndStatus(testTasks);
          return JSON.stringify(original) === JSON.stringify(testTasks);
        }
      },
      {
        name: 'High priority tasks come before medium and low',
        run: () => {
          const result = utils.sortTasksByPriorityAndStatus(testTasks);
          if (!result) return false;
          const firstHigh = result.findIndex(t => t.priority === 'high');
          const firstMedium = result.findIndex(t => t.priority === 'medium');
          const firstLow = result.findIndex(t => t.priority === 'low');
          return firstHigh < firstMedium && firstMedium < firstLow;
        }
      }
    ],
    instructions: {
      objective: 'Sort tasks: high→medium→low priority, incomplete before completed',
      hints: [
        'Create a copy first: [[...tasks]]',
        'Use [.sort()] with a compare function',
        'Map priorities to numbers: [{ high: 3, medium: 2, low: 1 }]',
        'Sort by priority first, then by completion status'
      ],
      example: `function sortTasksByPriorityAndStatus(tasks) {
  const priorityValue = { high: 3, medium: 2, low: 1 };
  return [...tasks].sort((a, b) => {
    if (priorityValue[b.priority] !== priorityValue[a.priority]) {
      return priorityValue[b.priority] - priorityValue[a.priority];
    }
    return a.completed - b.completed;
  });
}`,
      tips: [
        'Spread operator [[...tasks]] creates a shallow copy',
        '[.sort()] mutates the array, so copy first',
        'Compare function: [negative = a first], [positive = b first], [0 = no change]',
        'Boolean to number: [false = 0], [true = 1]'
      ]
    }
  },
  {
    name: 'areAllTasksComplete',
    description: 'Checks if every task is completed',
    difficulty: 'Easy',
    method: '.every()',
    tests: [
      {
        name: 'Returns a boolean',
        run: () => {
          const result = utils.areAllTasksComplete(testTasks);
          return typeof result === 'boolean';
        }
      },
      {
        name: 'Returns false when some tasks incomplete',
        run: () => {
          const result = utils.areAllTasksComplete(testTasks);
          const hasIncomplete = testTasks.some(t => !t.completed);
          return hasIncomplete ? result === false : true;
        }
      },
      {
        name: 'Returns true when all complete',
        run: () => {
          const allComplete = testTasks.filter(t => t.completed);
          const result = utils.areAllTasksComplete(allComplete);
          return result === true;
        }
      }
    ],
    instructions: {
      objective: 'Check if all tasks in the array are completed',
      hints: [
        'Use .every() method',
        'Return true only if every task has completed === true',
        'Very similar to .some() but checks if ALL match'
      ],
      example: `function areAllTasksComplete(tasks) {
  return tasks.every(task => task.completed === true);
}`,
      tips: [
        '.every() returns true if ALL elements pass the test',
        'Short version: tasks.every(task => task.completed)',
        'Returns true for empty arrays'
      ]
    }
  },
  {
    name: 'hasHighPriorityTasks',
    description: 'Checks if there are any high priority tasks',
    difficulty: 'Easy',
    method: '.some()',
    tests: [
      {
        name: 'Returns a boolean',
        run: () => {
          const result = utils.hasHighPriorityTasks(testTasks);
          return typeof result === 'boolean';
        }
      },
      {
        name: 'Returns true when high priority tasks exist',
        run: () => {
          const result = utils.hasHighPriorityTasks(testTasks);
          const hasHigh = testTasks.some(t => t.priority === 'high');
          return result === hasHigh;
        }
      },
      {
        name: 'Returns false when no high priority tasks',
        run: () => {
          const noHigh = testTasks.filter(t => t.priority !== 'high');
          const result = utils.hasHighPriorityTasks(noHigh);
          return result === false;
        }
      }
    ],
    instructions: {
      objective: 'Check if at least one task has high priority',
      hints: [
        'Use .some() method',
        'Return true if ANY task has priority === "high"',
        'Opposite of .every() - only needs one match'
      ],
      example: `function hasHighPriorityTasks(tasks) {
  return tasks.some(task => task.priority === 'high');
}`,
      tips: [
        '.some() returns true if AT LEAST ONE element passes the test',
        'Returns false for empty arrays',
        'Stops checking once it finds a match (efficient)'
      ]
    }
  },
  {
    name: 'findTaskById',
    description: 'Finds a specific task by its ID',
    difficulty: 'Easy',
    method: '.find()',
    tests: [
      {
        name: 'Returns the correct task object',
        run: () => {
          const result = utils.findTaskById(testTasks, sampleTask.id);
          return result && result.id === sampleTask.id;
        }
      },
      {
        name: 'Returns undefined for non-existent ID',
        run: () => {
          const result = utils.findTaskById(testTasks, 99999);
          return result === undefined;
        }
      },
      {
        name: 'Returns first matching task',
        run: () => {
          const result = utils.findTaskById(testTasks, testTasks[0].id);
          return result && JSON.stringify(result) === JSON.stringify(testTasks[0]);
        }
      }
    ],
    instructions: {
      objective: 'Find and return the first task with matching ID',
      hints: [
        'Use .find() method',
        'Compare task.id with the id parameter',
        'Returns undefined if no match found'
      ],
      example: `function findTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}`,
      tips: [
        '.find() returns the first element that passes the test',
        'Returns undefined if nothing matches',
        'Stops searching after first match (efficient)'
      ]
    }
  },
  {
    name: 'notifyIncompleteTasks',
    description: 'Console logs a reminder for each incomplete task',
    difficulty: 'Easy',
    method: '.forEach()',
    tests: [
      {
        name: 'Function is implemented (not just returning undefined)',
        run: () => {
          // Check if function body has actual code (not empty)
          const funcString = utils.notifyIncompleteTasks.toString();
          return funcString.includes('forEach') || funcString.includes('console.log');
        }
      },
      {
        name: 'Calls console.log for incomplete tasks',
        run: () => {
          let logCount = 0;
          const originalLog = console.log;
          console.log = () => { logCount++; };
          
          const incomplete = testTasks.filter(t => !t.completed);
          utils.notifyIncompleteTasks(incomplete);
          
          console.log = originalLog;
          return logCount === incomplete.length;
        }
      },
      {
        name: 'Does not return a value (undefined)',
        run: () => {
          const result = utils.notifyIncompleteTasks(testTasks);
          return result === undefined;
        }
      }
    ],
    instructions: {
      objective: 'Log a reminder message for each incomplete task (side effect function)',
      hints: [
        'Use [.forEach()] to iterate through tasks',
        'Check if task is incomplete [(!task.completed)]',
        '[console.log()] a message like: "Reminder: Complete \'[title]\'"',
        'This function should not return anything'
      ],
      example: `function notifyIncompleteTasks(tasks) {
  tasks.forEach(task => {
    if (!task.completed) {
      console.log(\`Reminder: Complete '\${task.title}'\`);
    }
  });
}`,
      tips: [
        '[.forEach()] is for side effects (like logging), not transforming data',
        'Does not return a value (returns [undefined])',
        'Check your browser console to see the output'
      ]
    }
  },
  {
    name: 'formatDate',
    description: 'Formats dates from YYYY-MM-DD to readable format with ordinal suffixes',
    difficulty: 'Medium',
    method: 'String Methods',
    tests: [
      {
        name: 'Formats date with correct ordinal suffix (1st, 2nd, 3rd, 4th)',
        run: () => {
          const result1 = utils.formatDate('2025-12-01');
          const result2 = utils.formatDate('2025-12-02');
          const result3 = utils.formatDate('2025-12-03');
          const result4 = utils.formatDate('2025-12-04');
          return result1 === '1st Dec 2025' && 
                 result2 === '2nd Dec 2025' && 
                 result3 === '3rd Dec 2025' && 
                 result4 === '4th Dec 2025';
        }
      },
      {
        name: 'Formats dates with "th" suffix correctly (11th, 12th, 13th)',
        run: () => {
          const result11 = utils.formatDate('2025-12-11');
          const result12 = utils.formatDate('2025-12-12');
          const result13 = utils.formatDate('2025-12-13');
          const result21 = utils.formatDate('2025-12-21');
          return result11 === '11th Dec 2025' && 
                 result12 === '12th Dec 2025' && 
                 result13 === '13th Dec 2025' &&
                 result21 === '21st Dec 2025';
        }
      },
      {
        name: 'Returns string in correct format for different months',
        run: () => {
          const result = utils.formatDate('2026-01-15');
          return result === '15th Jan 2026';
        }
      }
    ],
    instructions: {
      objective: 'Transform date strings from YYYY-MM-DD format into readable format with ordinal suffixes',
      hints: [
        'Parse the date string using [new Date()] to extract day, month, and year',
        'Use [date.getDate()], [date.getMonth()], and [date.getFullYear()] to get components',
        'Create a helper function to get ordinal suffix (1st, 2nd, 3rd, 4th, 11th, 12th, 13th, etc.)',
        'Use an array of month abbreviations: [["Jan", "Feb", "Mar", ...]]',
        'Remember: 11th, 12th, 13th are special cases (not 11st, 12nd, 13rd)',
        'For other numbers: 1→st, 2→nd, 3→rd, others→th',
        'Check if [n > 3 && n < 21] first to catch 11-13, then use [n % 10] for last digit',
        'Use template literals to build the final string: [\`\${day}\${suffix} \${month} \${year}\`]'
      ],
      example: `function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  // Get ordinal suffix
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return 'th'; // 11th-13th special case
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  
  return \`\${day}\${getOrdinal(day)} \${month} \${year}\`;
}`,
      tips: [
        'Use [new Date(dateString)] to parse the date',
        'The [%] (modulo) operator helps find the last digit for ordinals',
        'Numbers 11-13 always use "th" regardless of their last digit',
        'Test with dates like [2025-12-01], [2025-12-13], [2025-12-21] to verify all cases'
      ]
    }
  },
  {
    name: 'isRouteActive',
    description: 'Checks if a route path matches the current URL (used for navbar highlighting)',
    difficulty: 'Easy',
    method: 'String Methods',
    tests: [
      {
        name: 'Returns true for exact match on home route',
        run: () => {
          const result = utils.isRouteActive('/', '/');
          return result === true;
        }
      },
      {
        name: 'Returns false for home route when on different page',
        run: () => {
          const result1 = utils.isRouteActive('/', '/dashboard');
          const result2 = utils.isRouteActive('/', '/tasks');
          return result1 === false && result2 === false;
        }
      },
      {
        name: 'Returns true when route path matches current path',
        run: () => {
          const result1 = utils.isRouteActive('/dashboard', '/dashboard');
          const result2 = utils.isRouteActive('/tasks', '/tasks');
          return result1 === true && result2 === true;
        }
      },
      {
        name: 'Returns true when current path starts with route path',
        run: () => {
          const result1 = utils.isRouteActive('/tasks', '/tasks/123');
          const result2 = utils.isRouteActive('/stats', '/stats/details');
          return result1 === true && result2 === true;
        }
      }
    ],
    instructions: {
      objective: 'Implement route matching logic to determine if a navigation link should be highlighted as active',
      hints: [
        'Handle the home route [/] as a special case - it should only match exactly',
        'For other routes, check if [currentPath] starts with [routePath]',
        'Use [===] for exact equality check',
        'Use [.startsWith()] method to check if a string begins with another string',
        'Use an [if] statement to handle the home route separately'
      ],
      example: `function isRouteActive(routePath, currentPath) {
  // Exact match for home route
  if (routePath === '/' && currentPath === '/') {
    return true;
  }
  
  // For other routes, check if currentPath starts with routePath
  if (routePath !== '/' && currentPath.startsWith(routePath)) {
    return true;
  }
  
  return false;
}`,
      tips: [
        'The home route [/] needs special handling to avoid matching all paths',
        '[.startsWith()] is perfect for checking URL prefixes',
        'This function is used by the navbar to highlight the active page',
        'Test edge cases: home vs other routes, exact matches vs prefixes'
      ]
    }
  }
];
