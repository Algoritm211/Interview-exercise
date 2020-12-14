import React from "react";
import {Button, IconButton} from '@material-ui/core'


const TimerButton = ({icon}) => {

  const Icon = icon
  return (
    <IconButton>
      <Icon />
    </IconButton>
  )
}
export default TimerButton