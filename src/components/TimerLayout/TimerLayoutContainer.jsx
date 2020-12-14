import React from "react";
import TimerLayout from "./TimerLayout";
import {connect} from "react-redux";
import {processTime, removeTimer, togglePause} from "../../redux/timer-reducer";

class TimerLayoutContainer extends React.Component {

  componentDidMount() {
    this.timerId = setInterval(this.props.processTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }


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

const mapDispatchToProps = (dispatch) => {
  return {
    processTime: () => {
      dispatch(processTime())
    },
    removeTimer: (id) => {
      dispatch(removeTimer(id))
    },
    togglePause: (id) => {
      dispatch(togglePause(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TimerLayoutContainer)