import React from 'react'
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function Trailer(props) {

    const id = useParams()
    console.log(id);
    const item = props.movies[id.id]

    return (
        <div>
            {item.name}

            <p>{item.description}</p>

            <iframe width="853" height="480" src={item.traile} />

        </div>
    )
}

export default Trailer
