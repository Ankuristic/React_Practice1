// import React, { useState } from "react";

// const Counter: React.FC = () =>{
//     const [count,setCount]= useState<number>(0);

//     return(
//         <>
//          <button onClick={ () => setCount (count+1)} > Hello </button>
//           </>
//         );
// };

// export default Counter;

import React, { useState,useEffect } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [decrementcount, setDecrementcount]= useState<number>(1);
    // console.log("Current count:", count);

    useEffect ( () =>{
             console.log("hello");

             if(count<5){
                return ()=>{
                    console.log("unmount");
                }
             }
    })


    // useEffect (()=>{
    //     console.log("Use Effect!")
    //     return ()=>{
    //         console.log("unmount");
    //     }

    // })



    return (
        <div>
            <p>Count: {count}</p>
            <button className=" text-white bg-blue-700 hover:bg-blue-800" onClick={() => setCount(count + 1)}>Increment</button>
            <button className=" text-white bg-blue-700 hover:bg-blue-800" onClick={() => setDecrementcount(count - decrementcount)}>Decrement</button>

        </div>
    );
};

export default Counter;