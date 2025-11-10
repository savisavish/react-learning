import { useState } from "react"

function Usestatehook(){
    const initial = 0
    const [count,setCount] = useState(initial)
    return(
        <>
            <p className="text-bold">UseState lets you add state to a functional components. it returns a state value and a function to update it.</p>
            UseCount - {count}
            <button onClick={(e)=>setCount(count+1)}>Increment</button>
            <button onClick={(e)=>setCount(count-1)}>Decrement</button>
            <button onClick={(e)=>setCount(initial)}>Reset</button>
        </>
    )
}

export default Usestatehook