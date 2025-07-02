import React, { useEffect, useState } from 'react'

// START has 
// ID , SIZE , X , Y , OPACITY , ANIMATION DURATION 

const StartBackground = () => {
    const [stars,setStars]=useState([]);
    const [meteors,setMeteors]=useState([]);

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

    const generateMeteors = () =>{
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
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0 '>
        {stars.map((star)=>(
            <div 
            key={star.id} 
                className='star animate-pluse-subtle' style={{
                width:`${star.size}px` ,
                height: `${star.size}px`,
                left: `${star.x}%`,   
                top: `${star.y}%`,  
                opacity:`${star.opacity}` , 
                animationDuration: `${star.animationDuration}s`  
            }} />  
        ))}
    </div>
  )
}

export default StartBackground