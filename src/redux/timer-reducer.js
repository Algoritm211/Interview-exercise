import moment from 'moment'
import {getNewTime} from "../helpers/timerhelper";

const ADD_NEW_TIMER = 'timer/ADD_NEW_TIMER'
const HIDE_TIMERS = 'timer/HIDE_TIMER'
const SHOW_TIMERS = 'timer/SHOW_TIMER'
const UPDATE_TIMERS = 'timer/UPDATE_TIMERS'
const REMOVE_TIMER = 'timer/REMOVE_TIMER'
const TOGGLE_PAUSE_TIMER = 'timer/TOGGLE_PAUSE_TIMER'


const initialState = {
  timers: [
    {id: 1, label: 'Timer1', currentTime: '00:00:05', isPaused: false, saveTime: ''},
    {id: 2, label: 'Timer2', currentTime: '25:59:56', isPaused: true, saveTime: ''},
    {id: 3, label: 'Timer3', currentTime: '00:05:56', isPaused: false, saveTime: ''}
  ],
  isHidden: false
}


export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TIMER:
      return {
        ...state,
        timers: [action.newTimer, ...state.timers]
      }
    case UPDATE_TIMERS:
      return {
        ...state,
        timers: action.newTimers
      }
    case TOGGLE_PAUSE_TIMER:
      return {
        ...state,
        timers: [...state.timers.map((timer) => {
          if (timer.id === action.id) {
            return {
              ...timer,
              isPaused: !timer.isPaused
            }
          }
          return timer
        })]
      }
    case SHOW_TIMERS:
    case HIDE_TIMERS:
      return {
        ...state,
        isHidden: action.isHidden
      }
    case REMOVE_TIMER:
      const timersWithoutRemoved = state.timers.filter(timer => timer.id !== action.id)
      return {
        ...state,
        timers: [...timersWithoutRemoved]
      }
    default:
      return state
  }
}

export const addTimer = (timerName) => {
  return {
    type: ADD_NEW_TIMER,
    newTimer: {
      id: Date.now().toString(),
      label: timerName === '' ? Date.now().toString() : timerName,
      currentTime: '00:00:00',
      isPaused: false
    }
  }
}

export const removeTimer = (id) => {
  return {
    type: REMOVE_TIMER,
    id: id
  }
}

export const togglePause = (id) => {
  return {
    type: TOGGLE_PAUSE_TIMER,
    id: id
  }
}


const setNewTimers = (newTimers) => {
  return {
    type: UPDATE_TIMERS,
    newTimers: newTimers
  }
}

export const showTimers = () => {
  return {
    type: SHOW_TIMERS,
    isHidden: false
  }
}

export const hideTimers = () => {
  return {
    type: HIDE_TIMERS,
    isHidden: true
  }
}

export const processTime = () => {
  return (dispatch, getState) => {
    const timers = getState().timer.timers

    const newTimers = timers.map(timer => {
      if (!timer.isPaused) {
        return {
          ...timer,
          currentTime: getNewTime(timer.currentTime, 1)    //add .format('HH:mm:ss') if newTime MomentJS object
        }
      } else {
        return timer
      }
    })
    dispatch(setNewTimers(newTimers))
  }
}

export const setTimersToLocalStorage = () => {
  return (dispatch, getState) => {
    const timersToLocStorageReady = getState().timer.timers.map(timer => {
      const saveTime = moment().unix()
      return {
        ...timer,
        saveTime: saveTime,
      }
    })

    localStorage.setItem('timers', JSON.stringify(timersToLocStorageReady))
  }
}

export const getTimersFromLocalStorage = () => {
  return (dispatch) => {
    const rawTimers = localStorage.getItem('timers')

    if (rawTimers) {
      const timersArray = JSON.parse(rawTimers)
      const timersArrayReadyToState = timersArray.map(timer => {
        if (!timer.isPaused) {
          const nowMomentTime = moment().unix()
          const difference = nowMomentTime - timer.saveTime
          // In this context timer.currentTime is current time when timer was hidden
          let newTime = getNewTime(timer.currentTime, difference)
          return {
            ...timer,
            currentTime: newTime,
          }
        } else {
          return timer
        }
      })
      dispatch(setNewTimers(timersArrayReadyToState))
    }
  }
}


// let timestring1 = '03:59:01';
// let startdate = moment(timestring1, 'hh:mm:ss');
// let returned_endate = moment(startdate).add(1, 'second');
//
// console.log(returned_endate.format('hh:mm:ss'))

