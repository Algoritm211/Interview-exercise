import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format';
// momentDurationFormatSetup(moment);

const ADD_NEW_TIMER = 'timer/ADD_NEW_TIMER'
const UPDATE_TIMERS = 'timer/UPDATE_TIMERS'
const REMOVE_TIMER = 'timer/REMOVE_TIMER'
const TOGGLE_PAUSE_TIMER = 'timer/TOGGLE_PAUSE_TIMER'


const initialState = {
  timers: [
    {id: 1, label: 'Timer1', currentTime: '00:00:05', isPaused: false},
    {id: 2, label: 'Timer2', currentTime: '25:59:56', isPaused: true},
    {id: 3, label: 'Timer3', currentTime: '00:05:56', isPaused: false},
  ]
}


export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TIMER:
      return {
        ...state
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

const getNewTime = (input) => {
  let seconds = moment.duration(input).asSeconds() + 1;
  // let oldTime = moment(input, 'HH:mm:ss');
  // let newTime = moment(oldTime).add(1, 'second');
  let dur = moment.duration(seconds, 'seconds');
  return dur.format('HH:mm:ss', {trim: false});
};

export const processTime = () => {
  return (dispatch, getState) =>{
    const timers = getState().timer.timers

    const newTimers = timers.map(timer => {
      if (!timer.isPaused) {
        return {
          ...timer,
          currentTime: getNewTime(timer.currentTime)    //add .format('HH:mm:ss') if newTime MomentJS object
        }
      } else {
        return timer
      }
    })
    dispatch(setNewTimers(newTimers))
  }
}

// let timestring1 = '03:59:01';
// let startdate = moment(timestring1, 'hh:mm:ss');
// let returned_endate = moment(startdate).add(1, 'second');
//
// console.log(returned_endate.format('hh:mm:ss'))

