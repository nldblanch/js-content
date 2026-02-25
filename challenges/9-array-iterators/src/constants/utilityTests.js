import * as utils from '../utils';
import { initialTasks } from '../data';

const testTasks = initialTasks;

export const utilityTests = [
  {
    name: 'filterTasksByStatus',
    description: 'Filter tasks by completion status.',
    difficulty: 'Easy',
    method: '.filter()',
    tests: [
      {
        name: 'Returns only completed tasks when completed=true',
        run: () => {
          const result = utils.filterTasksByStatus(testTasks, true);
          return Array.isArray(result) && result.every((t) => t.completed === true);
        },
      },
      {
        name: 'Returns only incomplete tasks when completed=false',
        run: () => {
          const result = utils.filterTasksByStatus(testTasks, false);
          return Array.isArray(result) && result.every((t) => t.completed === false);
        },
      },
    ],
    instructions: {
      objective: 'Use .filter() to keep only tasks matching the completed flag.',
      hints: [
        'Your callback should return whether [task.completed === completed].',
        'Return the result of [tasks.filter(...)].',
      ],
      example: `function filterTasksByStatus(tasks, completed) {
  return tasks.filter(task => task.completed === completed);
}`,
      tips: ['.filter() returns a new array and does not mutate the original.'],
    },
  },
  {
    name: 'getHighPriorityTasks',
    description: "Get all tasks where priority is 'high'.",
    difficulty: 'Easy',
    method: '.filter()',
    tests: [
      {
        name: 'Returns only high priority tasks',
        run: () => {
          const result = utils.getHighPriorityTasks(testTasks);
          return Array.isArray(result) && result.every((t) => t.priority === 'high');
        },
      },
      {
        name: 'Returns the same count as a reference filter',
        run: () => {
          const result = utils.getHighPriorityTasks(testTasks);
          const expectedCount = testTasks.filter((t) => t.priority === 'high').length;
          return Array.isArray(result) && result.length === expectedCount;
        },
      },
    ],
    instructions: {
      objective: "Use .filter() to keep only tasks with priority === 'high'.",
      hints: ['Return [tasks.filter(task => task.priority === "high")].'],
      example: `function getHighPriorityTasks(tasks) {
  return tasks.filter(task => task.priority === 'high');
}`,
      tips: ['This is just a specialized filter.'],
    },
  },
  {
    name: 'formatTasksForDisplay',
    description: 'Turn tasks into simple display strings for the UI.',
    difficulty: 'Easy',
    method: '.map()',
    tests: [
      {
        name: 'Returns an array of strings',
        run: () => {
          const result = utils.formatTasksForDisplay(testTasks);
          return (
            Array.isArray(result) &&
            result.length === testTasks.length &&
            result.every((v) => typeof v === 'string')
          );
        },
      },
      {
        name: 'Includes the title in each string',
        run: () => {
          const result = utils.formatTasksForDisplay(testTasks);
          return (
            Array.isArray(result) &&
            result.every((line, i) => typeof line === 'string' && line.includes(testTasks[i].title))
          );
        },
      },
    ],
    instructions: {
      objective: 'Use .map() to transform each task into a string.',
      hints: [
        'Return [tasks.map(...)].',
        'Try a format like: "Task: <title> (Priority: <priority>)".',
      ],
      example: `function formatTasksForDisplay(tasks) {
  return tasks.map(task => 'Task: ' + task.title + ' (Priority: ' + task.priority + ')');
}`,
      tips: ['.map() returns a new array with one output per input item.'],
    },
  },
  {
    name: 'findTaskById',
    description: 'Find a single task by its id.',
    difficulty: 'Easy',
    method: '.find()',
    tests: [
      {
        name: 'Returns the task with the matching id',
        run: () => {
          const target = testTasks[0];
          const result = utils.findTaskById(testTasks, target.id);
          return result && result.id === target.id;
        },
      },
      {
        name: 'Returns undefined when no match is found',
        run: () => {
          const result = utils.findTaskById(testTasks, Number.MAX_SAFE_INTEGER);
          return result === undefined;
        },
      },
    ],
    instructions: {
      objective: 'Use .find() to locate the first task whose id matches.',
      hints: ['Return [tasks.find(task => task.id === id)].'],
      example: `function findTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}`,
      tips: ['.find() returns the item, or undefined if not found.'],
    },
  },
  {
    name: 'areAllTasksComplete',
    description: 'Check if every task is completed.',
    difficulty: 'Easy',
    method: '.every()',
    tests: [
      {
        name: 'Returns false when at least one task is incomplete',
        run: () => {
          const result = utils.areAllTasksComplete(testTasks);
          return result === false;
        },
      },
      {
        name: 'Returns true when all tasks are completed',
        run: () => {
          const allDone = testTasks.map((t) => ({ ...t, completed: true }));
          const result = utils.areAllTasksComplete(allDone);
          return result === true;
        },
      },
    ],
    instructions: {
      objective: 'Use .every() to check whether all tasks have completed === true.',
      hints: ['Return [tasks.every(task => task.completed === true)].'],
      example: `function areAllTasksComplete(tasks) {
  return tasks.every(task => task.completed === true);
}`,
      tips: ['.every() stops early when it finds a false result.'],
    },
  },
  {
    name: 'hasHighPriorityTasks',
    description: 'Check if there is at least one high-priority task.',
    difficulty: 'Easy',
    method: '.some()',
    tests: [
      {
        name: 'Returns true when a high priority task exists',
        run: () => {
          const result = utils.hasHighPriorityTasks(testTasks);
          return result === true;
        },
      },
      {
        name: 'Returns false when no high priority tasks exist',
        run: () => {
          const noHigh = testTasks.map((t) => ({ ...t, priority: 'low' }));
          const result = utils.hasHighPriorityTasks(noHigh);
          return result === false;
        },
      },
    ],
    instructions: {
      objective: "Use .some() to check whether any task has priority === 'high'.",
      hints: ["Return [tasks.some(task => task.priority === 'high')]."],
      example: `function hasHighPriorityTasks(tasks) {
  return tasks.some(task => task.priority === 'high');
}`,
      tips: ['.some() stops early when it finds a true result.'],
    },
  },
  {
    name: 'notifyIncompleteTasks',
    description: 'Log a reminder for each incomplete task (side-effect practice).',
    difficulty: 'Easy',
    method: '.forEach()',
    tests: [
      {
        name: 'Logs once per incomplete task',
        run: () => {
          const incompleteCount = testTasks.filter((t) => t.completed === false).length;

          const original = console.log;
          const logs = [];
          console.log = (...args) => {
            logs.push(args.join(' '));
          };

          try {
            utils.notifyIncompleteTasks(testTasks);
          } finally {
            console.log = original;
          }

          return logs.length === incompleteCount;
        },
      },
      {
        name: 'Does not throw',
        run: () => {
          try {
            utils.notifyIncompleteTasks(testTasks);
            return true;
          } catch {
            return false;
          }
        },
      },
    ],
    instructions: {
      objective: 'Use .forEach() to loop over tasks and log reminders for incomplete ones.',
      hints: [
        'If [task.completed === false], log a reminder that includes the title.',
        "Example log: Reminder: Complete 'Buy groceries'",
      ],
      example: `function notifyIncompleteTasks(tasks) {
  tasks.forEach(task => {
    if (!task.completed) {
      console.log(\`Reminder: Complete '\${task.title}'\`);
    }
  });
}`,
      tips: ['.forEach() is great for side effects (logging, updating the DOM, etc).'],
    },
  },
];
