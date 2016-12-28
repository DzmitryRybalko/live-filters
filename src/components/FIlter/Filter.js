import React from 'react';
import { connect } from 'react-redux';
import { switchFilter } from '../../actions/DonutActions';

import './Filter.scss';

class FilterHeader extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    checked: React.PropTypes.bool,
    checkedId: React.PropTypes.string,
    switchFilter: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.id === this.props.checkedId,
    };
  }

  onChange = () => {
    if (this.props.checkedId === this.props.id) return;
    this.props.switchFilter(this.props.id);
  };

  render() {
    const isChecked = this.props.checkedId === this.props.id;
    const headClassName = `filter-header ${isChecked ? 'checked' : ''}`;

    return (
      <div id={`filter-header-${this.props.id}`} className={headClassName}>
        <input
          id={`tab${this.props.id}`}
          type="radio"
          name="tabs"
          onChange={this.onChange}
          defaultChecked={this.props.checked} />
        <label htmlFor={`tab${this.props.id}`}>{this.props.name}</label>
      </div>
    );
  }
}

class FilterBody extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    children: React.PropTypes.any,
  }

  render() {
    return (
      <section id={`content${this.props.id}`} className="filter-body">
        {this.props.children || <div />}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    checkedId: state.donut.checkedId,
  };
}

const connectedFilterHeader = connect(mapStateToProps, {
  switchFilter,
})(FilterHeader);

export { connectedFilterHeader as FilterHeader, FilterBody };
