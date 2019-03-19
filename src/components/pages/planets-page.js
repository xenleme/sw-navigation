import React from 'react';
import { withRouter } from 'react-router-dom';

import { PlanetDitails, PlanetList } from '../sw-components';
import Row from '../row';

const PlanetsPage = ({ history, match }) => {
  return (
    <Row 
      left={<PlanetList onItemSelected={(id) => history.push(id)} />}
      right={<PlanetDitails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PlanetsPage);