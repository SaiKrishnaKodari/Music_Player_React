import React, { useState,useEffect } from 'react'
import "./album.css"
import AudioPlayer from './AudioPlayer';

export  function Audios(song) {
    {console.log(song)}

    if (JSON.stringify(song) === '{}' ){
    }
    else{
    var audio = document.getElementById('audio');
    var source = document.getElementById('audioSource');
    let music=`${song}`
    console.log(audio,source)
    source.src = music;
    audio.controls=true;
    audio.load();
    audio.play();

    }
    return  <>
    <div>
                            <div className='row'>
                                <div className="col-2 col-lg-2" ><h6 id='tag'>NAVBAR</h6> </div>
                                <div className="col-7 col-lg-7" >
                                    <audio id='audio' controls  style={{width:'100%'}}>
                                        <source id="audioSource"src='#' type="audio/mpeg"/>
                                    </audio> 
                                </div>
                            <div className="col-3 col-lg-3" >
                                {/* <button onClick={() => this.setting()}>+</button> */}
                            </div>
                            </div>         
                        </div>
    </>

};