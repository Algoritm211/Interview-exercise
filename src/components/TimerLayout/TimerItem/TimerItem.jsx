import React from "react";
import classes from './TimerItem.module.css'
import TimerButton from "./TimerButton/TimerButton";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const TimerItem = ({timerLabel, currentTime, paused}) => {
  return (
    <div className={classes.timerItem}>
      <div>
        { timerLabel }
      </div>
      <div className={classes.timerActivity}>
        <div className={classes.timer}>
          { currentTime }
        </div>
        <div className={classes.buttons}>
          <div>
            <TimerButton icon={paused ? PauseCircleOutlineIcon : PlayCircleOutlineIcon} />
          </div>
          <div>
            <TimerButton icon={RemoveCircleOutlineIcon}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TimerItem