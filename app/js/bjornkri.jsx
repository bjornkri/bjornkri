import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/bjornkri.scss';

import Roller from './components/Roller';
import LinkList from './components/LinkList';
import { workList, personalList } from './lists';

const App = () => (
  <div id="content">
    <div className="pc">
      <h1>Bj&ouml;rn Kristinsson</h1>
      <Roller />
    </div>
    <div className="l-colgroup">
      <div>
        <LinkList list={workList} />
      </div>
      <div>
        <LinkList list={personalList} />
      </div>
    </div>
    <div className="pc cta">
      Get in touch! <a href="mailto:bjorn@bjornkri.com">bjorn@bjornkri.com</a>
    </div>
  </div>
);


ReactDOM.render(
  <App />,
  document.getElementById('bjornkriApp'),
);
