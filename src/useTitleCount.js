import React,  {useEffect } from 'react'

const useTitleCount = (count) => {
   
    useEffect(()=>{
        if(count >=1){
           document.title=`chat(${count})`
        }else{
            document.title=`chat`
        }
    },[count])
}

export default useTitleCount;
