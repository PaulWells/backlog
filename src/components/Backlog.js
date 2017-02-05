import React from 'react';
import { LogItemInput } from './LogItemInput';
import { connect } from 'react-redux';
import { LogItem } from './LogItem';
import { isOlderThanOneDay } from '../utils/time';

const BacklogComponent = ({
  listItems
}) => (
  <div className="backlog">
    <LogTitle/>
    {
      listItems.filter(function (item) {
        return !isOlderThanOneDay(new Date(item.dateCompleted));
      })
      .map(function(item, i){
        return <LogItem
                listItem={item}
                key={item.id}/>;
      })
    }
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

export default Backlog
