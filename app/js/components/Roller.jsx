import React from 'react';


class Roller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        ['Django developer', true],
        ['Homebrewer', false],
        ['Rubik\'s Cube solver', false],
        ['React advocate', true],
        ['SASS enthusiast', true],
        ['Guitar mangler', false],
        ['Reader of books', false],
        ['Vexillologist', false],
        ['Pun-lover', false],
        ['Icelander', false],
        ['Descendant of Flemish Counts', false],
        ['Gentenaar', false],
        ['Akureyringur', false],
        ['Semi-Italian', false],
        ['Gourmand', false],
      ],
      currentRole: ['Django developer', true],
    };
  }

  componentDidMount() {
    setTimeout(this.randomizeRole.bind(this), 1000);
  }

  randomizeRole() {
    const number = Math.floor(Math.random() * this.state.roles.length);
    const newRole = this.state.roles[number];
    this.setState({ currentRole: newRole });
    let interval = 200;
    if (newRole[1]) {
      interval = 2000;
    }
    setTimeout(this.randomizeRole.bind(this), interval);
  }

  render() {
    return (
      <div className="l-roller">
        <div className="roller">
          <span className={this.state.currentRole[1] ? 'roller-featured' : ''}>{this.state.currentRole[0]}</span>
        </div>
      </div>
    );
  }
}

export default Roller;
