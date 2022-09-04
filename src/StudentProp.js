import {useState} from 'react';

var classDetails = {name : "Sumit Kumar", email : "sumit@gmail.com", address : "Hisar", phone : "9875641321"};

export default function StudentProp(studentData){
    console.table(studentData);
    const [classData,setClassData] = useState({name : "Amit Kumar", email : "amit@gmail.com", address : "Haryana", phone : "32165498"});
  
    function updateClassData(data){
    
    // data.each((value,key) => {
    //   setClassData(prevState => ({
    //     ...prevState,
    //     [key]: value
    //   }));
    // })
      console.log(data.name)
      setClassData(classData => ({
          ...classData,
          name: data.name,
          email: data.email,
          address: data.address,
          phone: data.phone
      }));
   

    // setClassData(prevState => ({
    //   ...prevState,
    //   name: "Sumit Kumar"
    // }));

    // classDetails.each((value,key) => {
    //   // setClassData(classData.key : value);
    // })
    }

    return(
        <div>
            <h1>Name: {classData.name}</h1>
            <h1>Email: {classData.email}</h1>
            <h1>Address: {classData.address}</h1>
            <h1>Phone: {classData.phone}</h1>
            <button onClick={()=>updateClassData(classDetails)}>Update Record</button>
        </div>
    )
}