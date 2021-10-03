import React from "react";
//children-to render its  children or whatever it wraps
const Scroll = (props)=>{
    return(
        <div style={{overflowY:'scroll',border:'2px solid black',height:'450px' }}>
            {props.children}
        </div>
    );
}
export default Scroll;