import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import './App.css'
import Posts from './Posts';
import Pagination from './Pagination';
const Appx = () => {
  const [item,setItem]=useState({
    results:[]
  });
  const [loading,setLoading]=useState(false);
   const [currentPage,setCurrentPage]=useState(1);
   const postPerpage=50;
  
  
   useEffect(()=>{
     const fetchPost=async(currentValue)=>{
    
      const offset=currentPage*postPerpage
  
        setLoading(true);
        const res=await axios.get(`https://api-staging.es-pal.org/portal_api/individual/?limit=${postPerpage}&offset=${offset}`)
        
        setItem(res.data)
        setLoading(false);
      
  }
     fetchPost();
   },[])
   console.log("ressss",item)
   console.log("total ....",item.results)
   const indexOfLastPage=currentPage*postPerpage
   const indexOfFirstPage=indexOfLastPage-postPerpage
 
   const currentPosts=item.results.slice(indexOfFirstPage,indexOfLastPage)
  //  console.log(currentPosts,"====>")
   const paginate = pageNumber => setCurrentPage(pageNumber);
 
  return (
    <div className="container mt-5">
      <h1>My App</h1>
    
      <Posts item={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postPerpage}
        totalPosts={item.length}
        paginate={paginate}
      />
        
    </div>
     
    
  )
}

export default Appx
