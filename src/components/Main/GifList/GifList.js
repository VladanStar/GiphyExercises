import React from "react";
import Gif from "./Gif/Gif";
import "./GifList.css";

const GifList = (props) => {
    return (

        <div className="gifList__wrapper">
            {props.gifs.map(item => <Gif key={item.id} gifId={item.id} img={item.images.downsized.url} />)}
        </div>


    )
}
export default GifList;
