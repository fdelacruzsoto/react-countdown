import React, {Component} from 'react';

class Clock extends Component {

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentWillMount() {
    const {deadline} = this.props;
    this.getTimeUntil(deadline);
  }

  componentDidMount() {
    const {deadline} = this.props;
    setInterval(() => this.getTimeUntil(deadline), 1000);
  }

  /*
  <div class="countdown-timer">
          <div *ngFor="let time of display; let i = index" class="measurements {{time}}">
          <p class="measurements-number"> {{displayNumbers[i]}} </p>
          <span *ngIf="display[i+1]" class="divider"> {{divider}} </span>
          <p class="measurements-text">
          {{time}}
          </p>
      </div>
  </div>
   */

  render() {
    return (
      <div className="countdown-timer ">
        <div className="measurements ">
          <p>
            {this.leading0(this.state.days)}
          </p>
          <span className="divider"/>
          <p className="measurements-text">
            Days
          </p>
        </div>
        <div className="measurements ">
          <p>
            {this.leading0(this.state.hours)}
          </p>
          <p className="measurements-text">
            Hours
          </p>
        </div>
        <div className="measurements ">
          <p>
            {this.leading0(this.state.minutes)}
          </p>
          <p className="measurements-text">
            Minutes
          </p>
        </div>
        <div className="measurements ">
          <p>
            {this.leading0(this.state.seconds)}
          </p>
          <p className="measurements-text">
            Seconds
          </p>
        </div>
      </div>
    );
  }

  leading0 = (num) => {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0});
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({days, hours, minutes, seconds});
    }
  }

}

export default Clock;