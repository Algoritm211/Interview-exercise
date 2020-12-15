import React, {useState} from "react";
import classes from './AddTimerField.module.css'
import {Button} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {addTimer} from "../../redux/timer-reducer";
import {connect} from "react-redux";


const AddTimerField = (props) => {

  const [inputValue, setInputValue] = useState('')

  const addNewTimer = () => {
    props.addTimer(inputValue.trim())
    setInputValue('')
  }

  return (
    <div className={classes.timerInput}>
      <div>
        <label htmlFor={'timerInput'}>Enter your new timer name</label>
      </div>
      <div>
        <input
          type={'text'}
          id={'timerInput'}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <div>
        <Button
          onClick={addNewTimer}
          variant="contained"
          color="primary"
          >
          <AddBoxIcon />
          &nbsp;
          Add new timer
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTimer: (timerName) => {
      dispatch(addTimer(timerName))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTimerField)