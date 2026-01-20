import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { initialTasks } from './data';
import NavBar from './components/NavBar';
import IntroductionPage from './pages/IntroductionPage';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import StatsPage from './pages/StatsPage';
import TagsPage from './pages/TagsPage';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (newTask) => {
    const task = {
      ...newTask,
      id: Math.max(...tasks.map(t => t.id)) + 1,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setTasks([...tasks, task]);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route 
              path="/dashboard" 
              element={<Dashboard tasks={tasks} toggleTaskComplete={toggleTaskComplete} />} 
            />
            <Route 
              path="/tasks" 
              element={<TasksPage tasks={tasks} toggleTaskComplete={toggleTaskComplete} addTask={addTask} />} 
            />
            <Route 
              path="/stats" 
              element={<StatsPage tasks={tasks} />} 
            />
            <Route 
              path="/tags" 
              element={<TagsPage tasks={tasks} />} 
            />
          </Routes>
        </main>

        <footer className="footer">
          <p>Built with React Router | Practicing Array Iterator Methods</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
