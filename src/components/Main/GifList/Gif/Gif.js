import React from "react";
import "./Gif.css";

const Gif = (props) => {
const showId =()=>{
    console.log(props.gifId);
}
return (
    <div className="gif_wrapper">
        <img src={props.img} alt="Random GIF" />
        <button onClick={showId}>Remove</button>

    </div>
)
}
export default Gif;