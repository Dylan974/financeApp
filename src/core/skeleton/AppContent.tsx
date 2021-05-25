import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../modules/Home';
import NavBar from '../navigation/NavBar';

const AppContent = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default AppContent;
