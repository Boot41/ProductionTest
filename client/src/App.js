import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import JobSearchResultsPage from './pages/JobSearchResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <nav>
            <Link to="/" className="App-link">Home</Link>
            <Link to="/employer-dashboard" className="App-link">Employer Dashboard</Link>
            <Link to="/candidate-dashboard" className="App-link">Candidate Dashboard</Link>
            <Link to="/job-search-results" className="App-link">Job Search Results</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/job-search-results" element={<JobSearchResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;