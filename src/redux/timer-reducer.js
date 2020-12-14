

const ADD_NEW_TIMER = 'timer/ADD_NEW_TIMER'


const initialState = {
  timers: [
    {id: 1, label: 'Timer1', currentTime: '00:00:03', paused: false},
    {id: 2, label: 'Timer2', currentTime: '00:34:03', paused: true},
    {id: 3, label: 'Timer3', currentTime: '00:05:03', paused: false},
  ]
}


export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TIMER:
      return {
        ...state
      }
    default:
      return state
  }
}


export const processTime = () => {
  return (dispatch, getState) =>{

  }
}

