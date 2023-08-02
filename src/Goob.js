import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function Goob() {
    const [data,setData]=useState(0);
    const [text,setText]=useState("");
    const fectchApi=async()=>{
        const {data}=await axios('https://dummyjson.com/products');
        // console.log(data)

    }
    useEffect(()=>{
        fectchApi()
    },[])
    const increment=()=>{
        if(data !==0){
            setData(data-1);
        }
           
        
       
    }
    const decrement=()=>{
    
        setData(data+1);
       }
       const handleClick=()=>{
        //  console.log("click to success")
        let newtext=text.toUpperCase();
        setText(newtext);
        // let newtext=text.toLowerCase();
        // setText(newtext)
       }
       const handleChange=(e)=>{
          // console.log("change to data")
          setText(e.target.value)
        
       }
  return (
    <>
    <div>
      <h1>{data}</h1>
      <textarea type="text" value={text} onChange={handleChange}></textarea>
      <button onClick={increment} >increment</button>
      <button onClick={decrement} >decrement</button>
      <br/>
      <button className='btn btn-primary' onClick={handleClick}>UpperCase</button>
    </div>
    <div>
      <h1>your text Summary</h1>
      <p>{text.split('').length} words and {text.length} charatcter</p>
    </div>
    </>
  )
}
