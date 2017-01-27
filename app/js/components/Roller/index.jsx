import React from 'react';
import roles from './roles';

class Roller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles,
      currentRole: roles[0],
    };
    this.featuredInterval = 2000;
    this.defaultInterval = 200;
  }

  componentDidMount() {
    setTimeout(this.randomizeRole.bind(this), this.featuredInterval);
  }

  randomizeRole() {
    const number = Math.floor(Math.random() * this.state.roles.length);
    const newRole = this.state.roles[number];
    this.setState({ currentRole: newRole });
    let interval = this.defaultInterval;
    if (newRole.featured) {
      interval = this.featuredInterval;
    }
    setTimeout(this.randomizeRole.bind(this), interval);
  }

  render() {
    const featured = this.state.currentRole.featured;
    const role = this.state.currentRole.role;
    return (
      <div className="l-roller">
        <div className="roller">
          <span className={featured ? 'roller-featured' : ''}>{role}</span>
        </div>
      </div>
    );
  }
}

export default Roller;
