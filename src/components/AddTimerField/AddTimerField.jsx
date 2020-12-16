import React, {useState} from "react";
import classes from './AddTimerField.module.css'
import {Button} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {addTimer, hideTimers, showTimers} from "../../redux/timer-reducer";
import {connect} from "react-redux";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const AddTimerField = (props) => {

  const [inputValue, setInputValue] = useState('')

  const addNewTimer = () => {
    props.addTimer(inputValue.trim())
    setInputValue('')
  }

  return (
    <div className={ classes.timerInput }>
      <div>
        <label htmlFor={ 'timerInput' }>Enter your new timer name</label>
      </div>
      <div>
        <input
          type={ 'text' }
          id={ 'timerInput' }
          value={ inputValue }
          onChange={ (event) => setInputValue(event.target.value) }
        />
      </div>
      <div>
        <Button
          onClick={ addNewTimer }
          variant="contained"
          color="primary"
        >
          <AddBoxIcon/>
          &nbsp;
          Add new timer
        </Button>
        &nbsp;&nbsp;
        {
          !props.isTimersHidden
            ? <Button
              variant="contained"
              color="primary"
              onClick={ props.hideTimers }
            >
              <ArrowUpwardIcon/>
              &nbsp;
              Hide timers
            </Button>

            : <Button
              variant="contained"
              color="primary"
              onClick={ props.showTimers }
            >
              <ArrowDownwardIcon/>
              &nbsp;
              Show timers
            </Button>
        }

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isTimersHidden: state.timer.isHidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTimer: (timerName) => {
      dispatch(addTimer(timerName))
    },
    hideTimers: () => {
      dispatch(hideTimers())
    },
    showTimers: () => {
      dispatch(showTimers())
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTimerField)