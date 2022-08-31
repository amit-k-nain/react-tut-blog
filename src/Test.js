// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';

function Test() {
  const [data,setData] = useState("Amit Kumar");
  const [num,setNum] = useState(0);
  function name(){
    setData("Amit Nain");
    setNum(num+1);
  }

  return (
    <div className="Test">
      <h1>{data} {num}</h1>
      <button onClick={()=>name()}>Click Me</button>
    </div>
  );
}

export default Test;