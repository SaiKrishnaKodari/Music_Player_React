import React, { useState,useEffect,useRef } from "react";
import {Songsinhome  } from "./songsinhome";
import {Audios} from './Audio'

export default function Index(){

    var [questions,setQuestions] = useState([]);
    
    const url="http://127.0.0.1:8000"
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data =>
        {
            return setQuestions(data)
        })
    },[])

    return (
        <div>
            <div>
                <Audios/>
            </div>
            <hr></hr>
            <div className='row'>
                {questions.map((qn)=> Songsinhome(qn))}
            </div>
        
            
        </div>
    )


}