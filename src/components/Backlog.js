import React from 'react';
import { LogItemInput } from './LogItemInput';
import { connect } from 'react-redux';
import { LogItem } from './LogItem';

const BacklogComponent = ({
  listItems
}) => (
  <div className="backlog">
    <LogTitle/>
    { listItems.map(function(item, i){
      return <LogItem
                index={i}
                key={i}/>;
    })}
    <LogItemInput/>
  </div>
);

const LogTitle = () => (
  <div>
    Backlog
  </div>
);

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems
  }

};

const Backlog = connect(
  mapStateToProps
)(BacklogComponent);

export { Backlog }
