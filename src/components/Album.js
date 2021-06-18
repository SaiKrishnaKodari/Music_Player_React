import React, { useState,useEffect } from 'react'
import "./album.css"
import Image from './Image'
export default function Album(id)
 {
    
    {console.log('id in album',id)}
    // var [movie,setmovie] = useState([]);
    // useEffect(()=>{
    //     fetch(`http://127.0.0.1:8000/album_image/${id}`)
    //     .then(response => response.json())
    //     .then(data =>
    //     {
    //         return data
    //     })
    // },[])
    return (
        <div>
            {/* {console.log(movie)} */}
            
            {/* {movie.map((item)=> moviesinpage(item))} */}
        </div>
        
    
    )
 }
 function moviesinpage(item){
    
    {console.log('PK',item.pk)}
    let song=`${item.fields.title}`
    let pic=`http://127.0.0.1:8000/${item.fields.photo}`
     return <>
     <div style={{width:'200px',height:'150px'}}>
        
     {Image(item.pk,pic)}
     <img style={{ margin:'5px 5px 0px 9px', width:'200px',height:'170px'}}src={pic} />
     <br></br>
     <h5 className='title'>{item.fields.title}</h5>
     <h6 className='casting'>{item.fields.Casting}</h6>

     </div>
        
     </>

 }
 