import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Etpt from '../../modules/ETPT/etpt-all';
import Home from '../../modules/Home';
import NavBar from '../navigation/NavBar';

const AppContent = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Router>
          <Switch>
            <Route path="/" component={Etpt} />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default AppContent;
