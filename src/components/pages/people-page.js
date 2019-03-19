import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonDitails, PersonList } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ history, match }) => {
  return (
    <Row 
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDitails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PeoplePage);