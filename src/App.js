import React from "react";
import AddTimerField from "./components/AddTimerField/AddTimerField";
import TimerLayoutContainer from "./components/TimerLayout/TimerLayoutContainer";
import classes from './App.module.css'
import {connect} from "react-redux";

function App(props) {

  return (
    <div className={ classes.mainApp }>
      <div>
        <AddTimerField/>
        { !props.isTimersHidden && <TimerLayoutContainer/> }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isTimersHidden: state.timer.isHidden
  }
}

export default connect(mapStateToProps)(App);
