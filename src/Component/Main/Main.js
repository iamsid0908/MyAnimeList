import { useEffect, useState } from "react";
import React from "react";
import Card from "../Cards/Card";
import'./Main.css';

import Card2 from '../Cards2/Card2';
function Main(){

    const[aanime,setAnime]=useState([]);
    const[contiani,setConti]=useState([]);
    useEffect(()=>{
        fetch("https://otakudesu-api.herokuapp.com/api/home")
        .then(res=>res.json())
        .then((data)=>{
            setAnime(data.home.on_going);
        })
    },[])

// finished anime
    useEffect(()=>{
        fetch("https://otakudesu-api.herokuapp.com/api/home")
        .then(res=>res.json())
        .then((data)=>{
            setConti(data.home.complete);
            console.log(data.home);
        })
    },[])

    function onclick(){
        console.log("u clicked me");
    }
    return(
    <div>




        <diV className='bigpage'>
         <h1>Best Anime Shows</h1>
            {/* <img src="435.png"></img> */}
               
        

        </diV>

        {
            aanime.map(anime=>(
                <>
                <Card key={anime.id} anime={anime} onclick={onclick}/>
                
                
                </>
            ))
        }
       

         
        <h1 id="com">Complete Anime</h1>
{
    
            contiani.map(anime=>(
                <Card anime={anime}/>
            ))
        }
    </div>
    )
}
export default Main