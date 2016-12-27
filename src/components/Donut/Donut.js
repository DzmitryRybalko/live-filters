import React from 'react';
import rc from 'rc-progress';

import './Donut.scss';


const Circle = rc.Circle;

let timer;

class Donut extends React.Component {
  static propTypes = {
    percent: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      endPercent: this.props.percent,
    };
  }

  componentDidMount() {
    this.changePercent();
  }

  changePercent() {
    let percent = this.state.percent;

    const endPercent = this.state.endPercent;
    const coef = percent < endPercent ? 1 : -1;

    if (percent === endPercent) {
      clearTimeout(timer);
      return;
    }

    percent += coef;
    this.setState({ percent });
    timer = setTimeout(this.changePercent.bind(this), 10);
  }

  render() {
    const percent = this.state.percent;
    return (
      <div className="donut">
        <Circle
          className="circle"
          percent={percent}
          strokeWidth="6"
          />
        <div className="percent">{percent}%</div>
      </div>
    );
  }
}

export default Donut;
