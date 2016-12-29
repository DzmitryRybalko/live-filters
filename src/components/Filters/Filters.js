import React from 'react';
import { connect } from 'react-redux';

import './Filters.scss';
import Donut from '../Donut';
import Checkbox from '../Checkbox';
import { FilterHeader, FilterBody } from '../Filter';


class Filters extends React.Component {
  static propTypes = {
    percent: React.PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="filters">
        <div className="context">

          <FilterHeader id="1" name="Tab1" checked />
          <FilterHeader id="2" name="Tab2" />
          <FilterHeader id="3" name="Tab3" />
          <FilterHeader id="4" name="All" />

          <FilterBody id="1">
            <Checkbox name="Checkbox1" id="1.1" percents={40} />
            <Checkbox name="Checkbox2" id="1.2" percents={40} />
            <Checkbox name="Checkbox3" id="1.3" percents={40} />
            <Checkbox name="Checkbox4" id="1.4" percents={40} />
            <Checkbox name="Checkbox5" id="1.5" percents={40} />
          </FilterBody>

          <FilterBody id="2">
            <Checkbox name="Checkbox1" id="2.1" percents={40} />
            <Checkbox name="Checkbox2" id="2.2" percents={40} />
            <Checkbox name="Checkbox3" id="2.3" percents={40} />
            <Checkbox name="Checkbox4" id="2.4" percents={40} />
            <Checkbox name="Checkbox5" id="2.5" percents={40} />
          </FilterBody>

          <FilterBody id="3">
            <Checkbox name="Checkbox1" id="3.1" percents={40} />
            <Checkbox name="Checkbox2" id="3.2" percents={40} />
            <Checkbox name="Checkbox3" id="3.3" percents={40} />
            <Checkbox name="Checkbox4" id="3.4" percents={40} />
            <Checkbox name="Checkbox5" id="3.5" percents={40} />
          </FilterBody>

          <FilterBody id="4" />
        </div>

        <Donut percent={this.props.percent} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const donutState = state.donut;
  return {
    percent: donutState.percents[+donutState.checkedId - 1],
  };
}

const connectedFilters = connect(mapStateToProps)(Filters);

export default connectedFilters;
