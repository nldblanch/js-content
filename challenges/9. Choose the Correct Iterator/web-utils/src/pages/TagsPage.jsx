import { getAllUniqueTags, filterTasksByStatus } from '../utils';
import { UI_COLORS, STATUS_COLORS } from '../constants/colors';

const TagsPage = ({ tasks }) => {
  const allTags = getAllUniqueTags(tasks);
  const isTagsImplemented = allTags !== undefined;
  const isFilterImplemented = filterTasksByStatus(tasks, true) !== undefined;

  const getTasksWithTag = (tag) => {
    return tasks.filter(task => task.tags.includes(tag));
  };

  const getTagStats = (tag) => {
    const tasksWithTag = getTasksWithTag(tag);
    const completed = filterTasksByStatus(tasksWithTag, true);
    return {
      total: tasksWithTag.length,
      completed: completed !== undefined ? completed.length : null,
      incomplete: completed !== undefined ? tasksWithTag.length - completed.length : null
    };
  };

  return (
    <div className="tags-page">
      <h2>🏷️ Tags Overview</h2>

      {!isTagsImplemented && (
        <div className="empty-state" style={{ background: UI_COLORS.warning.background, padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p style={{ color: UI_COLORS.warning.text, margin: 0, fontSize: '1.2rem' }}>
            ❓❓❓ Implement <code>getAllUniqueTags()</code> to see tag analysis
          </p>
        </div>
      )}
      
      <div className="tags-summary">
        <div className="stat-card">
          <h3>{isTagsImplemented ? allTags.length : '???'}</h3>
          <p>Unique Tags</p>
          {!isTagsImplemented && (
            <small style={{ color: STATUS_COLORS.incomplete, fontSize: '0.75rem' }}>
              Implement getAllUniqueTags()
            </small>
          )}
        </div>
        <div className="stat-card">
          <h3>{tasks.reduce((sum, task) => sum + task.tags.length, 0)}</h3>
          <p>Total Tag Uses</p>
        </div>
        <div className="stat-card">
          <h3>{(tasks.reduce((sum, task) => sum + task.tags.length, 0) / tasks.length).toFixed(1)}</h3>
          <p>Avg Tags per Task</p>
        </div>
      </div>

      <div className="tags-grid">
        {!isTagsImplemented ? (
          <div className="empty-state" style={{ background: UI_COLORS.neutral.background, padding: '3rem', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ fontSize: '4rem', margin: '1rem 0' }}>❓❓❓</p>
            <p style={{ color: UI_COLORS.neutral.text, margin: 0, fontSize: '1.1rem' }}>
              Implement <code>getAllUniqueTags()</code> to extract and display all unique tags
            </p>
          </div>
        ) : allTags.length === 0 ? (
          <p className="empty-state">No tags found</p>
        ) : (
          allTags.map(tag => {
            const stats = getTagStats(tag);
            const completionRate = stats.completed !== null ? ((stats.completed / stats.total) * 100).toFixed(0) : '?';
            
            return (
              <div key={tag} className="tag-card">
                <div className="tag-header">
                  <h3>#{tag}</h3>
                  <span className="tag-count">{stats.total} tasks</span>
                </div>
                
                <div className="tag-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${completionRate}%` }}
                    ></div>
                  </div>
                  <span className="progress-label">{completionRate}% complete</span>
                </div>

                <div className="tag-stats">
                  <div className="tag-stat">
                    <span className="stat-icon">✓</span>
                    <span className="stat-value">{stats.completed !== null ? stats.completed : '?'}</span>
                    <span className="stat-label">Completed</span>
                  </div>
                  <div className="tag-stat">
                    <span className="stat-icon">○</span>
                    <span className="stat-value">{stats.incomplete !== null ? stats.incomplete : '?'}</span>
                    <span className="stat-label">Remaining</span>
                  </div>
                </div>

                <details className="tag-tasks">
                  <summary>View Tasks</summary>
                  <ul>
                    {getTasksWithTag(tag).map(task => (
                      <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <span className="task-status">{task.completed ? '✓' : '○'}</span>
                        <span className="task-title">{task.title}</span>
                        <span className={`task-priority priority-${task.priority}`}>
                          {task.priority}
                        </span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TagsPage;
