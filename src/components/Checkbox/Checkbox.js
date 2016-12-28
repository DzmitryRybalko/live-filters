import React from 'react';
import { connect } from 'react-redux';
import { checkClicked } from '../../actions/DonutActions';

import './Checkbox.scss';

class Checkbox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    percents: React.PropTypes.number.isRequired,
    checkClicked: React.PropTypes.func.isRequired,
  }

  onCheckboxChange = (event) => {
    this.props.checkClicked(this.props.percents * (event.target.checked ? 1 : -1));
  };

  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          onChange={this.onCheckboxChange}
          id={`checkbox-${this.props.id}`} />
        <label htmlFor={`checkbox-${this.props.id}`}>{this.props.name}</label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    checkedId: state.donut.checkedId,
  };
}

const connectedCheckbox = connect(mapStateToProps, {
  checkClicked,
})(Checkbox);

export default connectedCheckbox;
