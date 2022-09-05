import React,{useState} from "react";

export default function GetInputBoxValue(){
    const [data,setData] = useState(null);
    const [print,setPrint] = useState(true);

    function getData(val)
    {
        setData(val.target.value);
        setPrint(false);
    }
    return(
        <div class="App" style={{"marginTop":"30px"}}>
            {
                print ? 
                <h1>{data}</h1>
                : <h1>"Start Typing...."</h1>
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(!print)}> Print Data </button>
        </div>
    );
}