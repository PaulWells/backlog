import React from 'react';
import { LogItemInput } from './LogItemInput';
import { connect } from 'react-redux';
import { LogItem } from './LogItem';
import { isOlderThanOneDay, isOlderThanTwoWeeks } from '../utils/time';
import "./Backlog.css"

const BacklogComponent = ({
  name,
  id,
  listItems
}) => (
  <div className="backlog">
    <div className="backlogContent">
      <div className="backlogListContent">
        {
          listItems.filter(function (item) {
            return !(isOlderThanOneDay(new Date(item.dateCompleted)) ||
                     isOlderThanTwoWeeks(new Date(item.dateAdded)));
          })
          .map(function(item, i){
            return <LogItem
                    listItem={item}
                    key={item.id}/>;
          }).reverse()
        }
      </div>
      <LogItemInput id={id}/>
    </div>

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
