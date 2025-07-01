import React  from "react";

import { useParams } from "react-router-dom";
function parameter() {
    const {id}=useParams();
    return (
        <>
        <div style={{ background:'white' ,padding:'20px'}}>
            <h2 style={{color:'#0066cc'}}>useParameter</h2>
            <p> parameter ID:{id}</p>
            </div>
        </>
    );
}

export default parameter;