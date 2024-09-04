import { useState,useRef} from 'react';
export default function input(){
    const [name, setName] = useState("default");
 

    return (
        <>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
           
        </>
    );
}