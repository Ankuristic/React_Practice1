import React,{useState} from "react";

const Register: React.FC =() =>{

    const[FirstName, setFirstName]= useState('');
    const[LastName, setLastName] = useState('');
    const[Email, setEamil] = useState('');
    // const[UserName, setUserName] = useState('');
    // const[password, set]

    return (
        
            <React.Fragment>
                <p> Register Form </p>
                <label  htmlFor="FirstName"> FirstName :</label>
                <input type ="text"/>
                <label htmlFor="LastName">LastName: </label>
                <input type ="text"/>
                <label htmlFor="Email"> Email</label>
                <input type ="text"/> 
                <button type ="button"> Submit Please</button>
           
            </React.Fragment>
        
    )

}


export default Register;