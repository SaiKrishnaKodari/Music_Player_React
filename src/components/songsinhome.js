import React, {  } from 'react'
import Album from './Album'
import Index from './body.js'
import "./album.css"
import {Audios} from './Audio'
 export  function Songsinhome(question)
 {

    let variable=`http://127.0.0.1:8000/${question.fields.audio_file}`
    return (
        <div>
           
           <div className="col-3 col-lg-3" onClick={e=>Audios(variable)}>
               <div style={{backgroundColor:'white', width:'220px',height:'250px',boxShadow:'0px 0px 5px 5px gray'}}>
                    {Album(question.fields.Album)} 
                    <div className='title'>{question.fields.name}</div>
                </div>
            </div> 
            {/* <li className ="list-group-item"> */}
            {/* <div className="row">
            <div className="col-3 col-lg-3 " >
                <Album/>
                </div> */}
                {/* <div className="col-6 col-lg-6" >
                    
                    <audio id='player'controls >
                        <source src={variable} type="audio/mpeg"/>
                    </audio>                                  
                </div> */}
                {/* <div className="col-3 col-lg-3 " >
                    {question.fields.name}
                </div>
                <div className="col-3 col-lg-3 ">
                   {question.fields.Singer}
                </div>
            </div> */}
            {/* </li> */}
            <hr></hr>
            
        </div>
    
    )
 }