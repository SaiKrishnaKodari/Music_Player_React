// import React, { useState,useEffect } from 'react'
// class AudioPlayer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             song : '#'
//         };
//     }

//     delta = () =>{
//         {console.log('ahi')}
//         this.setState({
            
//             song : 'http://127.0.0.1:8000/songs/Kandaa-Vara-Sollunga-MassTamilan.fm_bLV6cIW.mp3'
//         });
//         document.getElementById('audio').load();
//         document.getElementById('audio').play(); 
//         // audio.load(); 
//     }

//     render() {
//         return (
//             <div>
//                 <div className='row'>
//                     <div className="col-2 col-lg-2" ><h6>{this.state.song}</h6> </div>
//                     <div className="col-7 col-lg-7" >
//                         <audio id='audio'controls  style={{width:'100%'}}>
//                             <source src={this.state.song} type="audio/mpeg"/>
//                         </audio> 
//                     </div>
//                 <div className="col-3 col-lg-3" ><button onClick={() => this.delta()}>+</button></div>
//                 </div>         
//             </div>
//             );
//     }
// }export default AudioPlayer;
import React, { useState,useEffect } from 'react'

export class AudioPlayer extends React.Component {
         constructor(props) {
             super(props);
             this.state = { 
                 song : '#'
             };
       }

 setting = () =>{
 
    this.setState({
            song : 'http://127.0.0.1:8000/songs/Kandaa-Vara-Sollunga-MassTamilan.fm_bLV6cIW.mp3'
        });
        document.getElementById('audio').load();
        document.getElementById('audio').play(); 
 }  
        
        render() {
                    return (
                        <div>
                            <div className='row'>
                                <div className="col-2 col-lg-2" ><h6>{this.state.song}</h6> </div>
                                <div className="col-7 col-lg-7" >
                                    <audio id='audio'controls  style={{width:'100%'}}>
                                        <source src={this.state.song} type="audio/mpeg"/>
                                    </audio> 
                                </div>
                            <div className="col-3 col-lg-3" ><button onClick={() => this.setting()}>+</button></div>
                            </div>         
                        </div>
                         );
                 }
            }export default AudioPlayer;






              
    // {console.log(JSON.stringify(song) === '{}' )}
    // if (JSON.stringify(song) === '{}' ){
    //     {console.log("in if",song)}
    //     return <>
    //     <h3>
    //         dad</h3></>
    // }
    // else{
    //     {console.log('in else',song)}

    //     console.log('song',song)
    //     let music=`${song}`
    //     {console.log(typeof music)}