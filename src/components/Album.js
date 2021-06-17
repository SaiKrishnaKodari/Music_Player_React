import React, { useState,useEffect } from 'react'
import "./album.css"
import AudioPlayer from './AudioPlayer';
export default function Album()
 {
    var [movie,setmovie] = useState([]);
    
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/albums/')
        .then(response => response.json())
        .then(data =>
        {
            return setmovie(data)
        })
    },[])
    return (
        <div>
            {/* {console.log(movie)} */}
            {movie.map((item)=> moviesinpage(item))}
        </div>
        
    
    )
 }
 function moviesinpage(item){
    
    let song=`${item.fields.title}`
    let pic=`http://127.0.0.1:8000/${item.fields.photo}`
     return <>
     <div style={{width:'200px',height:'150px'}}>
     <img style={{ margin:'5px 5px 0px 9px', width:'200px',height:'170px'}}src={pic} />
     <br></br>
     <h5 className='title'>{item.fields.title}</h5>
     <h6 className='casting'>{item.fields.Casting}</h6>

     </div>
        
     </>

 }
 