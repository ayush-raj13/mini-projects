
import React, { useEffect, useState } from 'react';
const input = 'w-full sm:w-[60%] mx-auto  m-2.5  rounded-md p-1.5 outline-0 text-slate-500 border-2 ';
const output = 'absolute  left-[35%] sm:left-[40%] md:left-[40%] font-bold text-white uppercase text-xl sm:text-3xl md:text-7xl';

export default function Meme() {
    const [memes, setMemes] = useState([]);
    const [meme , showmeme] = useState({img: 'https://i.imgflip.com/265k.jpg' , 
                                            topText : '' , 
                                            bottomText: ''});
    
    useEffect(() => {
       fetch('https://api.imgflip.com/get_memes').then((response) => response.json())
       .then((res) => setMemes(res.data.memes));

    },[])

    const handleClick = () => {
        
        const randomNum = Math.floor(Math.random() * memes.length);
        const url = memes[randomNum].url;
        showmeme(prevData => ({ ...prevData , img : url}));
    }
    const handleChange = (event) => {
        const {name , value} = event.target;
        showmeme(prevData => ({...prevData , 
            [name]: value}));

    }
  return (
    <main className='w-full  flex flex-col p-[30px]'>
        <form action="" className = 'grid grid-cols-1'>
            <input type="text" className = {input} placeholder = 'Top Text' name = 'topText' value = {meme.topText}  onChange = {handleChange} />

            <input type="text" className = {input} placeholder = 'Bottom Text' name = 'bottomText' value = {meme.bottomText} onChange = {handleChange}/>

            <button 
                className='w-full sm:w-[60%] mx-auto bg-green-500 hover:bg-green-700 duration-200 ease-in font-normal text-1xl text-white rounded-md p-1.5 outline-0 m-2.5 '
                type ='button' onClick = {handleClick}>Get a new Meme image</button>
        </form>
        
        <div className = 'w-[80%] mx-auto text-center my-[30px] relative'>
        
            <img src= {meme.img} alt="not found" className = 'w-[80%] h-[50%] mx-auto object-cover' />
            <h1 className = {`top-text top-[10%] ${output}`}> {meme.topText}</h1>
            <h1 className = {`bottom-text  ${output} bottom-[10%]`}> {meme.bottomText}</h1>
        </div>
    </main>
  )
}
