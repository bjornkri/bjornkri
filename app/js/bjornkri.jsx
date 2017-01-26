import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/bjornkri.scss';


const App = () => (
  <div id="content">
    <div className="pc">
      <h1>Bj&ouml;rn Kristinsson</h1>
      <h3>Under permanent reconstruction</h3>
    </div>
    <div className="l-colgroup">
      <div>
        <div className="pc">
          <h2>Work</h2>
          <ul>
            <li>Promogogo</li>
            <li>Ticketmaster Mobile</li>
            <li>Cooori</li>
            <li>Atlas Copco (embedded monitoring system)</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="pc">
          <h2>Personal</h2>
          <ul>
            <li>Spoton games</li>
            <li>Peregrin</li>
            <li>What&rsquo;s Brewing?</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('bjornkriApp'),
);