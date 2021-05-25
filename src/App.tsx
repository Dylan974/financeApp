import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import AppContent from './core/skeleton/AppContent';
import Home from './modules/Home';

export default function App() {
  return (
    <AppContent>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AppContent>
  );
}
