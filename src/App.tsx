import React, { useState, useReducer, useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import { DECRE_AGE, INCRE_AGE, actionSetName } from "./redux/action";

const App: React.FC = () => {

  const age = useSelector<any>(state => state.reducer.age);
  const dispatch = useDispatch();

  const name = useSelector<any>(state => state.nameReducer.name);
  console.log(name);


  const handleInCreAge = () => {
    dispatch(INCRE_AGE);
  }
  const handleSetname = () => {
    dispatch(actionSetName());
  }

  return (
    <div className="app">
      Name: {name}
      <br />
      Age : {age}
      <br />
      <button onClick={()=> handleInCreAge()}>Tăng tuổi</button>
      <button onClick={()=> handleSetname()}>Set name</button>
    </div>
  );
};

export default App;
