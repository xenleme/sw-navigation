import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from '../error-boundary';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import SwapiService from "../../services/swapi-service";

import './app.css';
import { StarshipDitails } from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();
  
  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />

              <RandomPlanet />

              <Route path="/" 
                     render={() => <h2>welcome to sw navigation!!1</h2>}
                     exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route path="/starships/:id" 
                     render={({match}) => {
                       return <StarshipDitails itemId={match.params.id} />
                     }} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };
};
