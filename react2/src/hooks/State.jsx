import { useState } from "react"

const State = () => {
    const [count,setCount]=useState(0)
    const[like,setLike]=useState(0)
    const[dislike,setDislike]=useState(0)
    return(
    <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>

        <div>
            <h1>Like Dislike Section</h1>
            <h1>Likes: {like} Dislike: {dislike}</h1>
            <button onClick={()=> setLike(like+1)}>Like 👍</button>
            <button onClick={()=> setDislike(dislike+1)}>Dislike 👎</button>
        </div>
    </>
    )
}
export default State
