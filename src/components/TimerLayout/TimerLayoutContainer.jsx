import React from "react";
import TimerLayout from "./TimerLayout";
import {connect} from "react-redux";
import {
  getTimersFromLocalStorage,
  processTime,
  removeTimer,
  setTimersToLocalStorage,
  togglePause
} from "../../redux/timer-reducer";

class TimerLayoutContainer extends React.Component {

  componentDidMount() {
    this.props.getTimersFromLocalStorage()
    this.timerId = setInterval(this.props.processTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    this.props.setTimersToLocalStorage()
  }


  render() {
    if (this.props.isTimersHidden) {
      return(
        <div style={{textAlign: 'center', marginTop: '25px'}}>Timers Hidden</div>
      )
    }
    return (
      <TimerLayout {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timers: state.timer.timers,
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
    },
    setTimersToLocalStorage: () => {
      dispatch(setTimersToLocalStorage())
    },
    getTimersFromLocalStorage: () => {
      dispatch(getTimersFromLocalStorage())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TimerLayoutContainer)