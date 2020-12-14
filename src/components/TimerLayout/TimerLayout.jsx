import React from "react";
import TimerItem from "./TimerItem/TimerItem";
import classes from './TimerLayout.module.css'

const TimerLayout = ({timers}) => {

  const timersTable = timers.map((timer) => {
    return (
      <TimerItem
        timerLabel={timer.label}
        currentTime={timer.currentTime}
        paused={timer.paused}
      />
    )
  })

  return (
    <div>
      { timersTable }
    </div>
  )
}
export default TimerLayout