import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try{
       const res =await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data);
      } catch(error){
       console.log(error);
      }
    }
    getBook();
  },[]);
  return (
   <>
    <div className="max-w-screen-2xl container mx auto md:px-20 px-4"> 
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to you have 
          <span className="text-pink-500"> Here! : )</span>
        </h1> 
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe, nam facere eaque eum reiciendis dolore laudantium 
          omnis perspiciatis minus, rerum nostrum esse aliquam dolorum, 
          ipsam nisi. Consequuntur ipsam maxime id?
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>
        
      </div>
      <div className="mt-12 grid grid-cols-3 ">
      { book.map((item) => {
        return <Cards item={item} key={item.id} />
       })}
      </div>
    </div>
   </>
    
  )
}

export default Course;
