import { 
  calculateProductivityStats, 
  groupTasksByPriority,
  filterTasksByStatus,
  countCompletedTasks,
  areAllTasksComplete,
  formatDate
} from '../utils';
import {
  getPriorityColor,
  calculateCompletionRate,
  getOldestTask,
  getNewestTask,
  getNextDueDate
} from '../helpers/statsPageHelpers';
import {
  EmptyStateCard,
  WarningBanner,
  CompletionCircle,
  StatusBar,
  PriorityStat,
  PriorityStatCard,
  TimelineItem
} from '../components/StatsComponents';
import { UI_COLORS } from '../constants/colors';

const StatsPage = ({ tasks }) => {
  const stats = calculateProductivityStats(tasks);
  const groupedTasks = groupTasksByPriority(tasks);
  const completedTasks = filterTasksByStatus(tasks, true);
  const incompleteTasks = filterTasksByStatus(tasks, false);
  const allComplete = areAllTasksComplete(tasks);

  const isStatsImplemented = stats !== undefined;
  const isGroupedImplemented = groupedTasks !== undefined;
  const isFilterImplemented = completedTasks !== undefined && incompleteTasks !== undefined;
  const isAllCompleteImplemented = allComplete !== undefined;
  const isFormatDateImplemented = formatDate('2023-01-01') !== undefined && typeof formatDate === 'function';

  return (
    <div className="stats-page">
      <h2>📊 Statistics & Analytics</h2>

      {!isStatsImplemented && (
        <WarningBanner message="Implement calculateProductivityStats() to see completion rate and statistics" />
      )}

      <div className="stats-overview">
        <div className="stat-card large">
          <h3>Overall Completion Rate</h3>
          {isStatsImplemented ? (
            <CompletionCircle stats={stats} />
          ) : (
            <EmptyStateCard message="Waiting for calculateProductivityStats()" size="4rem" />
          )}
        </div>

        <div className="stat-card">
          <h3>Status Breakdown</h3>
          {isFilterImplemented ? (
            <div className="stat-bars">
              <StatusBar 
                label="Completed" 
                value={completedTasks.length} 
                totalTasks={tasks.length}
                className="completed"
              />
              <StatusBar 
                label="Incomplete" 
                value={incompleteTasks.length} 
                totalTasks={tasks.length}
                className="incomplete"
              />
            </div>
          ) : (
            <EmptyStateCard message="Implement filterTasksByStatus()" />
          )}
        </div>

        <div className="stat-card">
          <h3>Priority Distribution</h3>
          {isGroupedImplemented ? (
            <div className="priority-stats">
              {Object.entries(groupedTasks).map(([priority, priorityTasks]) => (
                <PriorityStat 
                  key={priority}
                  priority={priority}
                  priorityTasks={priorityTasks}
                  getPriorityColor={getPriorityColor}
                />
              ))}
            </div>
          ) : (
            <EmptyStateCard message="Implement groupTasksByPriority()" />
          )}
        </div>
      </div>

      {isAllCompleteImplemented && allComplete && (
        <div className="celebration-banner">
          🎉 Congratulations! All tasks are complete! 🎉
        </div>
      )}

      {isGroupedImplemented && (
        <div className="detailed-stats">
          <div className="stat-section">
            <h3>Completed Tasks by Priority</h3>
            <div className="priority-grid">
              {Object.entries(groupedTasks).map(([priority, priorityTasks]) => (
                <PriorityStatCard
                  key={priority}
                  priority={priority}
                  priorityTasks={priorityTasks}
                  completionRate={calculateCompletionRate(priorityTasks)}
                  getPriorityColor={getPriorityColor}
                />
              ))}
            </div>
          </div>

          {isFilterImplemented && (
            <div className="stat-section">
              <h3>Task Timeline</h3>
              {!isFormatDateImplemented && (
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: UI_COLORS.warning.accent, 
                  marginBottom: '1rem', 
                  background: UI_COLORS.warning.background, 
                  padding: '0.75rem', 
                  borderRadius: '4px' 
                }}>
                  💡 Implement <code>formatDate()</code> to display dates like "13th Dec 2025"
                </p>
              )}
              <div className="timeline-stats">
                <TimelineItem label="Oldest Task" value={getOldestTask(tasks)} isFormatDateImplemented={isFormatDateImplemented} />
                <TimelineItem label="Newest Task" value={getNewestTask(tasks)} isFormatDateImplemented={isFormatDateImplemented} />
                <TimelineItem label="Next Due" value={getNextDueDate(incompleteTasks)} isFormatDateImplemented={isFormatDateImplemented} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatsPage;
