import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommitPage from './page/commit-page/CommitPage';
import HomePage from './page/commit-page/home/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/repositories/:owner/:repository/commit/:commitSHA"
          element={<CommitPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
