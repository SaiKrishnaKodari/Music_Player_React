import React, {  } from 'react'
import ReactAudioPlayer from 'react-audio-player';
 export  function Songsinhome(question)
 {

    let variable=`http://127.0.0.1:8000/${question.fields.audio_file}`
    console.log(variable)
    return (
        <div>

            <li className ="list-group-item question-title">
            <div className="row"  >
                <div className="col-10 col-lg-10">
                {/* <ReactAudioPlayer
                    src={question.fields.audio_file}
                    autoPlay
                    controls
                    />
                <audio controls
        src={question.fields.audio_file}>
            Your browser does not support the
            <code>audio</code> element.
    </audio> */}
    <audio id='player'controls>
    <source src={variable} type="audio/mpeg"/>
    </audio> 
                                        
                </div>
                <div
                 className="col-2 col-lg-2 ">
                    <h6>{question.fields.name}</h6>
                    <h6>{question.fields.Singer}</h6>
                </div>
            </div>
            </li>
        </div>
    )
 }