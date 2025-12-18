const Dashboard = () => (
  <div className="page-content">
    <h1>📊 Dashboard</h1>
    <p>Welcome to the dashboard! This page is accessible to all users.</p>
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Users</h3>
        <p className="stat-number">1,234</p>
      </div>
      <div className="stat-card">
        <h3>Active Projects</h3>
        <p className="stat-number">56</p>
      </div>
      <div className="stat-card">
        <h3>Tasks Completed</h3>
        <p className="stat-number">789</p>
      </div>
    </div>
  </div>
);

const Users = () => (
  <div className="page-content">
    <h1>👥 Users</h1>
    <p>Manage user accounts and permissions.</p>
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            <td><span className="badge badge-active">Active</span></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>Manager</td>
            <td><span className="badge badge-active">Active</span></td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td>User</td>
            <td><span className="badge badge-inactive">Inactive</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Reports = () => (
  <div className="page-content">
    <h1>📄 Reports</h1>
    <p>View and generate reports.</p>
    <div className="reports-grid">
      <div className="report-card">
        <h3>Monthly Sales Report</h3>
        <p>Generated: Dec 1, 2025</p>
        <button className="btn-download">Download PDF</button>
      </div>
      <div className="report-card">
        <h3>User Activity Report</h3>
        <p>Generated: Dec 5, 2025</p>
        <button className="btn-download">Download PDF</button>
      </div>
      <div className="report-card">
        <h3>Performance Metrics</h3>
        <p>Generated: Dec 10, 2025</p>
        <button className="btn-download">Download PDF</button>
      </div>
    </div>
  </div>
);

const Analytics = () => (
  <div className="page-content">
    <h1>📈 Analytics</h1>
    <p>View detailed analytics and insights.</p>
    <div className="analytics-section">
      <div className="chart-placeholder">
        <p>📊 Revenue Chart</p>
        <div className="chart-bars">
          <div className="bar" style={{height: '60%'}}></div>
          <div className="bar" style={{height: '80%'}}></div>
          <div className="bar" style={{height: '45%'}}></div>
          <div className="bar" style={{height: '90%'}}></div>
          <div className="bar" style={{height: '70%'}}></div>
        </div>
      </div>
      <div className="chart-placeholder">
        <p>📈 User Growth</p>
        <div className="chart-bars">
          <div className="bar" style={{height: '40%'}}></div>
          <div className="bar" style={{height: '55%'}}></div>
          <div className="bar" style={{height: '70%'}}></div>
          <div className="bar" style={{height: '85%'}}></div>
          <div className="bar" style={{height: '95%'}}></div>
        </div>
      </div>
    </div>
  </div>
);

const Settings = () => (
  <div className="page-content">
    <h1>⚙️ Settings</h1>
    <p>Configure application settings.</p>
    <div className="settings-form">
      <div className="form-group">
        <label>Application Name</label>
        <input type="text" value="SecureApp" readOnly />
      </div>
      <div className="form-group">
        <label>Theme</label>
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div className="form-group">
        <label>Notifications</label>
        <input type="checkbox" /> Enable email notifications
      </div>
      <button className="btn-save">Save Settings</button>
    </div>
  </div>
);

export { Dashboard, Users, Reports, Analytics, Settings };
