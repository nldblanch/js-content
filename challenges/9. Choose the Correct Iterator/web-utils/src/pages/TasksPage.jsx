import { useState } from 'react';
import { filterTasksByStatus, filterTasksByPriority, sortTasksByPriorityAndStatus, findTaskById } from '../utils';
import { getPriorityColor } from '../helpers/statsPageHelpers';
import { UI_COLORS } from '../constants/colors';

const TasksPage = ({ tasks, toggleTaskComplete, addTask }) => {
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    tags: '',
    dueDate: '',
    completed: false
  });

  let filteredTasks = tasks;
  let isFilterImplemented = true;
  let isPriorityFilterImplemented = true;
  let isSortImplemented = true;
  
  if (filter === 'completed') {
    const result = filterTasksByStatus(filteredTasks, true);
    if (result !== undefined) {
      filteredTasks = result;
    } else {
      isFilterImplemented = false;
    }
  } else if (filter === 'incomplete') {
    const result = filterTasksByStatus(filteredTasks, false);
    if (result !== undefined) {
      filteredTasks = result;
    } else {
      isFilterImplemented = false;
    }
  }

  if (priorityFilter !== 'all') {
    const result = filterTasksByPriority(filteredTasks, priorityFilter);
    if (result !== undefined) {
      filteredTasks = result;
    } else {
      isPriorityFilterImplemented = false;
    }
  }

  const sortResult = sortTasksByPriorityAndStatus(filteredTasks);
  let sortedTasks;
  if (sortResult !== undefined) {
    sortedTasks = sortResult;
  } else {
    sortedTasks = filteredTasks;
    isSortImplemented = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      ...newTask,
      tags: newTask.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    });
    setNewTask({
      title: '',
      description: '',
      priority: 'medium',
      tags: '',
      dueDate: '',
      completed: false
    });
    setShowAddForm(false);
  };

  return (
    <div className="tasks-page">
      <div className="page-header">
        <h2>All Tasks</h2>
        <button className="btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? '✕ Cancel' : '+ Add Task'}
        </button>
      </div>

      {showAddForm && (
        <form className="add-task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Task Title *</label>
            <input 
              type="text" 
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select 
                value={newTask.priority}
                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input 
                type="date" 
                value={newTask.dueDate}
                onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Tags (comma-separated)</label>
            <input 
              type="text" 
              value={newTask.tags}
              onChange={(e) => setNewTask({...newTask, tags: e.target.value})}
              placeholder="e.g., development, react, urgent"
            />
          </div>
          <button type="submit" className="btn-primary">Create Task</button>
        </form>
      )}

      <div className="filters">
        <div className="filter-group">
          <label>Status:</label>
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'incomplete' ? 'active' : ''} 
            onClick={() => setFilter('incomplete')}
          >
            Incomplete
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        <div className="filter-group">
          <label>Priority:</label>
          <button 
            className={priorityFilter === 'all' ? 'active' : ''} 
            onClick={() => setPriorityFilter('all')}
          >
            All
          </button>
          <button 
            className={priorityFilter === 'high' ? 'active' : ''} 
            onClick={() => setPriorityFilter('high')}
          >
            High
          </button>
          <button 
            className={priorityFilter === 'medium' ? 'active' : ''} 
            onClick={() => setPriorityFilter('medium')}
          >
            Medium
          </button>
          <button 
            className={priorityFilter === 'low' ? 'active' : ''} 
            onClick={() => setPriorityFilter('low')}
          >
            Low
          </button>
        </div>
      </div>

      {!isFilterImplemented && filter !== 'all' && (
        <div className="empty-state" style={{ background: UI_COLORS.warning.background, padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ color: UI_COLORS.warning.text, margin: 0, fontSize: '1.2rem' }}>
            ❓❓❓ Implement <code>filterTasksByStatus()</code> to enable filtering by completion status
          </p>
        </div>
      )}

      {!isPriorityFilterImplemented && priorityFilter !== 'all' && (
        <div className="empty-state" style={{ background: UI_COLORS.warning.background, padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ color: UI_COLORS.warning.text, margin: 0, fontSize: '1.2rem' }}>
            ❓❓❓ Implement <code>filterTasksByPriority()</code> to enable filtering by priority level
          </p>
        </div>
      )}

      {!isSortImplemented && (
        <div className="empty-state" style={{ background: UI_COLORS.info.background, padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ color: UI_COLORS.info.text, margin: 0, fontSize: '1.2rem' }}>
            ❓❓❓ Implement <code>sortTasksByPriorityAndStatus()</code> to see tasks sorted by priority
          </p>
        </div>
      )}

      <div className="tasks-grid">
        {!isFilterImplemented || !isPriorityFilterImplemented || !isSortImplemented ? (
          <div className="empty-state" style={{ background: UI_COLORS.neutral.background, padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', margin: '1rem 0' }}>❓❓❓</p>
            <p style={{ color: UI_COLORS.neutral.text, margin: 0 }}>Implement the utility functions to see your filtered tasks</p>
          </div>
        ) : sortedTasks.length === 0 ? (
          <p className="empty-state">No tasks match your filters</p>
        ) : (
          sortedTasks.map(task => (
            <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
              <div className="task-card-header">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => toggleTaskComplete(task.id)}
                />
                <span 
                  className="priority-badge" 
                  style={{ backgroundColor: getPriorityColor(task.priority) }}
                >
                  {task.priority}
                </span>
              </div>
              <h3>{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <div className="task-meta">
                <span>📅 {task.dueDate}</span>
                <div className="task-tags">
                  {task.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TasksPage;
