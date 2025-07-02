import React, { useEffect, useState } from 'react'

// START has 
// ID , SIZE , X , Y , OPACITY , ANIMATION DURATION 

const StartBackground = () => {
    const [stars,setStars]=useState([]);

    useEffect(()=>{
        generateStars();
    },[])
    const generateStars = () =>{
        const numbersOfStars = Math.floor(window.innerWidth * window.innerHeight /10000);
        
        const newStars=[];

        for(let i=0; i<numbersOfStars; i++){
            newStars.push({
                id: i, 
                size: Math.random()* 3 + 1,
                x: Math.random()*100 ,
                y:  Math.random()*100,
                opacity: Math.random()*0.5 +0.5 ,
                animationDuration: Math.random()*4+2 ,
            });
        }

        setStars(newStars);
    }


  return (
    <div></div>
  )
}

export default StartBackground