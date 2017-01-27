import React from 'react';


const handleItem = (item, i) => {
  if (item.url) {
    return <li key={i}><a href={item.url}>{item.name}</a></li>;
  }
  return <li key={i}>{item.name}</li>;
};

const LinkList = props => (
  <div className="pc">
    <h2>{props.list.title}</h2>
    <ul>
      {props.list.list.map((item, i) => handleItem(item, i))}
    </ul>
  </div>
);

LinkList.propTypes = {
  list: React.PropTypes.shape({
    title: React.PropTypes.string,
    list: React.PropTypes.array,
  }).isRequired,
};


export default LinkList;
