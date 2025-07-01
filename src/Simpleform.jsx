import React,{useState} from "react";


function Simpleform() {
    const [name,setname]=useState(``);

    const handleSubmit=(e) => {
        e.preventDefault();
        alert(`Hello,${name}!`);
    };

  return (
    <form onSubmit={handleSubmit}> 
    <label> Enter your name:</label><br></br>
    <input
    type="text"
    value={name}
    onChange={(e) => setname(e.target.value)}
    />
    <br></br>
    <button type="submit"> submit</button>
    </form>
  
  )
}

export default Simpleform
