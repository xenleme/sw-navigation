import React, { Component } from 'react';
import { PlanetDitails, PlanetList } from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row 
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDitails itemId={selectedItem} />}
      />
    );
  };
};