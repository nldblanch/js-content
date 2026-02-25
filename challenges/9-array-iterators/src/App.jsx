import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { initialTasks } from './data';
import NavBar from './components/NavBar';
import IntroductionPage from './pages/IntroductionPage';
import TasksPage from './pages/TasksPage';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route 
              path="/tasks" 
              element={<TasksPage tasks={tasks} toggleTaskComplete={toggleTaskComplete} />} 
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
