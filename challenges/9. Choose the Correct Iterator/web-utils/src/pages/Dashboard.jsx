import { 
  getHighPriorityTasks, 
  filterTasksByStatus, 
  countCompletedTasks,
  hasHighPriorityTasks,
  sortTasksByPriorityAndStatus 
} from '../utils';
import { getPriorityColor } from '../helpers/statsPageHelpers';
import { UI_COLORS, STATUS_COLORS } from '../constants/colors';

const Dashboard = ({ tasks, toggleTaskComplete }) => {
  const highPriorityTasks = getHighPriorityTasks(tasks);
  const incompleteTasks = filterTasksByStatus(tasks, false);
  const completedCount = countCompletedTasks(tasks);
  const hasUrgentTasks = hasHighPriorityTasks(incompleteTasks);
  const sortedTasks = sortTasksByPriorityAndStatus(tasks);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>{tasks.length}</h3>
            <p>Total Tasks</p>
          </div>
          <div className="stat-card">
            <h3>{completedCount !== undefined ? completedCount : '???'}</h3>
            <p>Completed</p>
            {completedCount === undefined && (
              <small style={{ color: STATUS_COLORS.incomplete, fontSize: '0.75rem' }}>
                Implement countCompletedTasks()
              </small>
            )}
          </div>
          <div className="stat-card">
            <h3>{incompleteTasks !== undefined ? (tasks.length - (completedCount ?? tasks.filter(t => t.completed).length)) : '???'}</h3>
            <p>Remaining</p>
            {incompleteTasks === undefined && (
              <small style={{ color: STATUS_COLORS.incomplete, fontSize: '0.75rem' }}>
                Implement filterTasksByStatus()
              </small>
            )}
          </div>
          <div className={`stat-card ${hasUrgentTasks ? 'urgent' : ''}`}>
            <h3>{highPriorityTasks !== undefined ? highPriorityTasks.filter(t => !t.completed).length : '???'}</h3>
            <p>High Priority</p>
            {highPriorityTasks === undefined && (
              <small style={{ color: STATUS_COLORS.incomplete, fontSize: '0.75rem' }}>
                Implement getHighPriorityTasks()
              </small>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h3>🔥 High Priority Tasks</h3>
          {highPriorityTasks === undefined ? (
            <div className="empty-state" style={{ background: UI_COLORS.warning.background, padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ color: UI_COLORS.warning.text, margin: 0, fontSize: '1.2rem' }}>
                ❓❓❓ Implement <code>getHighPriorityTasks()</code> to see high priority tasks here
              </p>
            </div>
          ) : highPriorityTasks.length === 0 ? (
            <p className="empty-state">No high priority tasks</p>
          ) : (
            <ul className="task-list">
              {highPriorityTasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => toggleTaskComplete(task.id)}
                  />
                  <div className="task-details">
                    <span className="task-title">{task.title}</span>
                    <span className="task-due">Due: {task.dueDate}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="dashboard-section">
          <h3>📝 All Tasks (Sorted by Priority)</h3>
          {sortedTasks === undefined ? (
            <div className="empty-state" style={{ background: UI_COLORS.warning.background, padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ color: UI_COLORS.warning.text, margin: 0, fontSize: '1.2rem' }}>
                ❓❓❓ Implement <code>sortTasksByPriorityAndStatus()</code> to see sorted tasks here
              </p>
            </div>
          ) : (
            <ul className="task-list">
              {sortedTasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => toggleTaskComplete(task.id)}
                  />
                  <div className="task-details">
                    <span className="task-title">{task.title}</span>
                    <span 
                      className="task-priority" 
                      style={{ backgroundColor: getPriorityColor(task.priority) }}
                    >
                      {task.priority}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
