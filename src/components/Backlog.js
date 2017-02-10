import React from 'react';
import { LogItemInput } from './LogItemInput';
import { connect } from 'react-redux';
import { LogItem } from './LogItem';
import { isOlderThanOneDay } from '../utils/time';
import "./Backlog.css"
import Facebook from '../utils/facebook';
import { browserHistory } from 'react-router';

const BacklogComponent = ({
  params,
  listItems
}) => (
  <div className="backlog">
    <LogTitle name={params.name}/>
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
    <LogOut/>
  </div>
);

const LogOut = () => (
  <button
    onClick={() => {
      Facebook.logOut(function () {
         browserHistory.push('/');
      });
    }}
  >
    Log Out
  </button>
)

const LogTitle = ({
  name
}) => (
  <div className="title">
    Welcome, { name }
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
