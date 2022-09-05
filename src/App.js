// import React,{Component,useState} from "react";
import logo from './logo.svg';
import './App.css';
// import Test from './Test';
// import User from './User';
import DemoClassComponent from './DemoClassComponent';
import StudentClassComponent from './StudentClassComponent';
import StudentProp from './StudentProp';
import GetInputBoxValue from './GetInputBoxValue';
import HandleForm from './HandleForm';

function App() {
  
  // function TestDemoInside() {
  //   return (
  //     <div className="Test">
  //       <h1> Test Demo Inside Done</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <GetInputBoxValue />
      <StudentProp />
      <DemoClassComponent />
      <StudentClassComponent />
      <HandleForm />
      {/* <User />
      <Test />
      <TestDemo />
      <TestDemoInside /> */}
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ"
          rel="noopener noreferrer"
        >
          {/* <UserData /> */}
          Learn React With Amit
          {/* {TestDemoInside()} */}
        </a>
      </header>
    </div>
  );
}

// function TestDemo() {
//   return (
//     <div className="Test">
//       <h1> TestDemo Done</h1>
//     </div>
//   );
// }

// class UserData extends Component
// {
//     render(){
//         return(
//             <div className="Test">
//                 <h1>UserData class Done</h1>
//             </div>
//         );
//     }
// }

export default App;