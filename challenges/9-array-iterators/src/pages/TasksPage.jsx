import { useMemo, useState } from 'react';
import {
  filterTasksByStatus,
  getHighPriorityTasks,
  formatTasksForDisplay,
  findTaskById,
  areAllTasksComplete,
  hasHighPriorityTasks,
  notifyIncompleteTasks,
} from '../utils';

const TasksPage = ({ tasks, toggleTaskComplete }) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchId, setSearchId] = useState('');

  const filteredTasks = useMemo(() => {
    if (statusFilter === 'all') return tasks;
    const result = filterTasksByStatus(tasks, statusFilter === 'completed');
    return Array.isArray(result) ? result : tasks;
  }, [tasks, statusFilter]);

  const highPriorityFiltered = useMemo(
    () => {
      const result = getHighPriorityTasks(filteredTasks);
      return Array.isArray(result) ? result : [];
    },
    [filteredTasks]
  );

  const anyHighPriority = useMemo(() => {
    const result = hasHighPriorityTasks(tasks);
    return typeof result === 'boolean' ? result : false;
  }, [tasks]);

  const allComplete = useMemo(() => {
    const result = areAllTasksComplete(tasks);
    return typeof result === 'boolean' ? result : false;
  }, [tasks]);

  const foundTask = useMemo(() => {
    const id = Number(searchId);
    if (searchId.trim() === '' || !Number.isFinite(id)) return undefined;
    return findTaskById(tasks, id);
  }, [tasks, searchId]);

  const formattedPreview = useMemo(() => formatTasksForDisplay(filteredTasks), [filteredTasks]);
  const formattedPreviewSafe = Array.isArray(formattedPreview) ? formattedPreview : [];

  return (
    <div className="tasks-page">
      <div className="page-header">
        <h2>Task Manager</h2>
        <button
          className="btn-primary"
          type="button"
          onClick={() => notifyIncompleteTasks(tasks)}
          disabled={allComplete}
        >
          Remind incomplete tasks
        </button>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Status:</label>
          <button className={statusFilter === 'all' ? 'active' : ''} onClick={() => setStatusFilter('all')}>
            All
          </button>
          <button
            className={statusFilter === 'incomplete' ? 'active' : ''}
            onClick={() => setStatusFilter('incomplete')}
          >
            Incomplete
          </button>
          <button
            className={statusFilter === 'completed' ? 'active' : ''}
            onClick={() => setStatusFilter('completed')}
          >
            Completed
          </button>
        </div>

        <div className="filter-group">
          <label>Find by ID:</label>
          <input
            type="number"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="e.g. 3"
            style={{ maxWidth: '160px' }}
          />
          <span style={{ opacity: 0.8, marginLeft: '0.5rem' }}>
            {foundTask ? `Found: ${foundTask.title}` : ' '}
          </span>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <h3>Filtered tasks</h3>
          <p>{filteredTasks.length}</p>
        </div>
        <div className="stat-card">
          <h3>High priority (filtered)</h3>
          <p>{highPriorityFiltered.length}</p>
        </div>
        <div className="stat-card">
          <h3>Any high priority?</h3>
          <p>{anyHighPriority ? 'Yes' : 'No'}</p>
        </div>
        <div className="stat-card">
          <h3>All complete?</h3>
          <p>{allComplete ? 'Yes' : 'No'}</p>
        </div>
      </div>

      <div className="tasks-grid">
        {filteredTasks.map((task) => (
          <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <div className="task-card-header">
              <input type="checkbox" checked={task.completed} onChange={() => toggleTaskComplete(task.id)} />
              <span className="priority-badge">{task.priority}</span>
            </div>
            <h3>{task.title}</h3>
            <p className="task-description">{task.description}</p>
          </div>
        ))}
      </div>

      <div className="intro-instructions" style={{ marginTop: '2rem' }}>
        <h2>Preview (map)</h2>
        <ul>
          {formattedPreviewSafe.slice(0, 5).map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
