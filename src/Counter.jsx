import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={increaseCount}>Increase Count</button>
        </>
    )
}

export default Counter