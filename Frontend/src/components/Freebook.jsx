import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from './Cards';

function Freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try{
       const res =await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data.filter((data) => data.category === "Free"));
      } catch(error){
       console.log(error);
      }
    }
    getBook();
  },[]);
  // const filterdata = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx auto md:px-20 px-4">
        <div>
          <h1 className="font-semiBold text-xl pb-2">Free Offered Courses</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            vel incidunt veritatis pariatur voluptatibus minus odio ipsa doloribus
            quaerat numquam? Eaque facere, ad voluptatum libero quisquam cum reprehenderit
            molestias obcaecati!
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => {
              return <Cards item={item} key={item.id} />
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook;