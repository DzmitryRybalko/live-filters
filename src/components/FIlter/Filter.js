import React from 'react';
import { connect } from 'react-redux';
import { switchFilter } from '../../actions/DonutActions';

import './Filter.scss';

class FilterHeader extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    checkedId: React.PropTypes.string.isRequired,
    switchFilter: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
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
    const headClassName = `filter-header ${this.props.className} ${isChecked ? 'checked' : ''}`;

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
    id: React.PropTypes.string.isRequired,
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
