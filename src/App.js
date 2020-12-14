import React from "react";
import AddTimerField from "./components/AddTimerField/AddTimerField";
import TimerLayoutContainer from "./components/TimerLayout/TimerLayoutContainer";
import classes from './App.module.css'

function App() {
  return (
    <div className={ classes.mainApp }>
      <div>
        <AddTimerField/>
        <TimerLayoutContainer/>
      </div>
    </div>
  );
}

export default App;
