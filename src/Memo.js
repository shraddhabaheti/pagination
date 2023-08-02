import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [myNum,setMyNum]=useState(0);
    const[show,setShow]=useState(false);
    const getValue=()=>{
       return setMyNum(myNum+1);
    }


    const counterNumber=(num)=>{
    for (let i=0;i<=10000;i++){
     return num;
 }
 
    }
    const checkData= useMemo(()=>{
        return counterNumber(myNum)
        },[myNum])
  return (
    <div>
      <button onClick={getValue}>Counter</button>
      <h1>myNew Number {checkData} </h1>
     <button onClick={()=>setShow(!show)}>{show? "you clicked me":'plz Click me'}</button>

    </div>
  )
}

export default Memo
