import React from 'react';

import './Checkbox.scss';

class Checkbox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          id={`checkbox-${this.props.id}`} />
        <label htmlFor={`checkbox-${this.props.id}`}>{this.props.name}</label>
      </div>
    );
  }
}

export default Checkbox;
