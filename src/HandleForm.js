import React,{useState} from "react";

export default function HandleForm(){
    const [name,setName] = useState("");
    const [tnc,setTnc] = useState(false);
    const [intrest,setIntrest] = useState("");

    function getFormData(e)
    {
        console.log(name,tnc,intrest);
        e.preventDefault();
    }
    return(
        <div className="FormApp" style={{"marginTop":"30px"}}>
            <h1>Handle Form in React Example..</h1>
            <form onSubmit={getFormData}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /> <br /><br />
                <select onChange={(e)=> setIntrest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Amit</option>
                    <option>Sumit</option>
                    <option>Sachin</option>
                    <option>Ankit</option>
                </select><br /><br />
                <input type="checkbox" value={intrest} onChange={(e)=> setTnc(e.target.checked)}/> <span>Accept Term & Conditions..</span><br /><br />
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}