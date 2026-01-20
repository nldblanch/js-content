/**
 * Reusable components for StatsPage
 */

import { formatDate } from '../utils';
import { UI_COLORS, STATUS_COLORS } from '../constants/colors';

export const EmptyStateCard = ({ message, size = '3rem' }) => (
  <div style={{ textAlign: 'center', padding: '2rem', color: UI_COLORS.neutral.text }}>
    <p style={{ fontSize: size, margin: size === '4rem' ? '1rem 0' : '0.5rem 0' }}>❓❓❓</p>
    <p style={{ margin: 0 }}>{message}</p>
  </div>
);

export const WarningBanner = ({ message }) => (
  <div className="empty-state" style={{ background: UI_COLORS.warning.background, padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
    <p style={{ color: UI_COLORS.warning.text, margin: 0 }}>
      ⚠️ {message}
    </p>
  </div>
);

export const CompletionCircle = ({ stats }) => (
  <div className="progress-circle">
    <svg viewBox="0 0 100 100">
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="none" 
        stroke={UI_COLORS.neutral.background} 
        strokeWidth="10"
      />
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="none" 
        stroke={STATUS_COLORS.completed} 
        strokeWidth="10"
        strokeDasharray={`${stats.completionRate * 2.83} 283`}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
    </svg>
    <div className="progress-text">
      <span className="percentage">{stats.completionRate}%</span>
      <span className="label">{stats.completedTasks} of {stats.totalTasks}</span>
    </div>
  </div>
);

export const StatusBar = ({ label, value, totalTasks, className }) => (
  <div className="stat-bar">
    <span className="label">{label}</span>
    <div className="bar">
      <div 
        className={`fill ${className}`}
        style={{ width: `${(value / totalTasks) * 100}%` }}
      ></div>
    </div>
    <span className="value">{value}</span>
  </div>
);

export const PriorityStat = ({ priority, priorityTasks, getPriorityColor }) => (
  <div className="priority-stat">
    <span 
      className="priority-dot" 
      style={{ backgroundColor: getPriorityColor(priority) }}
    ></span>
    <span className="priority-label">{priority}</span>
    <span className="priority-count">{priorityTasks.length}</span>
    <div className="priority-breakdown">
      <span className="completed-count">
        ✓ {priorityTasks.filter(t => t.completed).length}
      </span>
      <span className="incomplete-count">
        ○ {priorityTasks.filter(t => !t.completed).length}
      </span>
    </div>
  </div>
);

export const PriorityStatCard = ({ priority, priorityTasks, completionRate, getPriorityColor }) => {
  const completed = priorityTasks.filter(t => t.completed);
  
  return (
    <div className="priority-stat-card">
      <div 
        className="priority-header" 
        style={{ backgroundColor: getPriorityColor(priority) }}
      >
        <h4>{priority.toUpperCase()}</h4>
      </div>
      <div className="priority-body">
        <p className="big-number">{completionRate}%</p>
        <p className="stat-detail">
          {completed.length} / {priorityTasks.length} completed
        </p>
      </div>
    </div>
  );
};

export const TimelineItem = ({ label, value, isFormatDateImplemented }) => {
  // Check if value is a date string in YYYY-MM-DD format
  const isDateString = value && typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
  const displayValue = isDateString && formatDate ? formatDate(value) : value;
  
  return (
    <div className="timeline-item">
      <span className="timeline-label">{label}</span>
      <span className="timeline-value" style={{color: isFormatDateImplemented ? '' : STATUS_COLORS.incomplete}}>{displayValue || value}</span>
    </div>
  );
};
