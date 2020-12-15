import React from "react";
import { IconButton, makeStyles} from '@material-ui/core'
import classes from './TimerButton.module.css'

const TimerButton = ({icon}) => {
  const Icon = icon
  return (
    <IconButton>
      <Icon className={classes.timerButton}/>
    </IconButton>
  )
}
export default TimerButton