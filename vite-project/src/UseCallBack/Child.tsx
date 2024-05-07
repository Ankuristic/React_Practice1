import React,{memo} from 'react';


const Child: React.FC =() =>{
    console.log("child component ");
    return (
        <div>
            <h1> child component</h1>
        </div>
    )
}



export default memo (Child) ;