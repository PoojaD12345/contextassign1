
// import React,{useReducer} from 'react'
import { useContext } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { TheamContext } from './context/TheamContext';



// const reducer=(state,{type,payload})=>{
//   switch(type){
//     case "InCREMENT":{
//          return state+payload;
//     }
//     case "DECREMENT":{
//       return state-payload;
//  }
//  default:{
//    return state;
//  }
//   }
// }

function App() {
  // const [counter,dispatch]=useReducer(reducer,0);
  const {isLight}=useContext(TheamContext)
  return (
    <div className={`App ${isLight ? "light":"dark"}`} >
      {/* Counter:{counter}
      <div>
        <button onclick={()=>dispatch({type:"DECREMENT",payload:1})}>-</button>
        <button onclick={()=>dispatch({type:"INCREMENT",payload:100})}>+</button>
      </div> */}
       <Navbar/>
      <Body/>
      <Footer/>
     
    </div>
  );
}

export default App;
