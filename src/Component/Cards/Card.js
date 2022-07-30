import React, { useState ,useEffect} from "react";
import'./Cards.css';

function Card({anime,onclick}){

    const[isLoading,setIsLoading]=useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return(
        <div className="list">
            <card>
            <div className="card-list">
            <img src={anime.thumb} alt="" width="250" height="300"></img>
                <h3>{anime?anime.title:" "}</h3>
                <h3>{anime.episode}</h3>
                <h3>{anime.uploaded_on}</h3>
                
                <a href={anime.link}>
        <button class="GFG">
            Play
        </button>
    </a>
                

            </div>
            </card>
        </div>
    )
}
export default Card