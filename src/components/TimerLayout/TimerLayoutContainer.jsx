import React from "react";
import TimerLayout from "./TimerLayout";
import {connect} from "react-redux";

class TimerLayoutContainer extends React.Component {


  render() {
    return (
      <TimerLayout {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timers: state.timer.timers
  }
}


export default connect(mapStateToProps)(TimerLayoutContainer)