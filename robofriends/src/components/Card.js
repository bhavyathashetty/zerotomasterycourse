import React from "react";
const Card = (props)=>{
    const {id,name,email}=props;// destructuring
    return (
        
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img alt='robo' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;