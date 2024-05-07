// import React, { useState } from 'react';


// const Parent : React.FC = () =>{
//     const[counterOne,setcounterOne] = useState<number>(0);

//     const incrementOne = () =>{
//         setcounterOne(counterOne+1)
//     }

//     return (
//         <>
//             <button onClick ={incrementOne}> Increment</button>
//         </>

//     )
// }


// export default Parent;




import React, { useState } from 'react';
import Child from './Child';

const Parenta:React.FC = () => {
    const [counterOne, setCounterOne] = useState<number>(0);
    const [countertwo , setCountertwo] useState<number>(0);
    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };

    return (
        <div>
            <Child countertwo ={countertwo}/>
            <p>Counter: {counterOne}</p>
            <button onClick={incrementOne}>Increment</button>
        </div>
    );
};

export default Parenta;