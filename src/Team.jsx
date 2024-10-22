import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(11);

    const addHandler = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const removeHandler = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
   
    const teamStyle = {
        padding: '10px',
        margin: '10px',
        border: '2px solid yellow',
        borderRadius: '20px'
    }

    

    return (
        <div style={teamStyle}>
            <h3>Team : {count}</h3>
            <button onClick={addHandler}>Add</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}