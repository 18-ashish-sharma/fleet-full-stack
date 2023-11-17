import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommitPage from './page/CommitPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/repositories/:owner/:repository/commit/:commitSHA"
          render={(props) => <CommitPage {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
