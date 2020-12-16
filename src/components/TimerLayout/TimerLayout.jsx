import React from "react";
import TimerItem from "./TimerItem/TimerItem";

const TimerLayout = ({timers, removeTimer, togglePause}) => {

  const timersTable = timers.map((timer, index) => {
    return (
      <TimerItem
        key={ index }
        timerLabel={ timer.label }
        currentTime={ timer.currentTime }
        isPaused={ timer.isPaused }
        removeTimer={ () => removeTimer(timer.id) }
        togglePause={ () => togglePause(timer.id) }
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