import React, { useEffect, useState } from 'react';
import LightModeButton from '../../assets/website/light-mode-button.png';
import DarkModeButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
  const [theme,setTheme]=useState(
    localStorage.getItem("theme")?localStorage.getItem("theme") : "light"
  )
  const element=document.documentElement; //access to Html element <html> tag
  
 // set theme to Local Storage and Html element
  useEffect(()=>{
    localStorage.setItem("theme",theme);
    if(theme === "dark"){
      element.classList.add("dark");

    } else {
      element.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <img 
       onClick={()=>setTheme( theme === "dark" ? "light" :"dark")}
      src={LightModeButton} alt="Theme Button" className={`w-12 cursor-pointer
        absolute right-0 z-10 ${theme=== "dark" ? "opacity-0" :"opacity-100"} transition-all duration-300`}/>



      <img 
      onClick={()=>setTheme( theme === "dark" ? "light" :"dark")}

      src={DarkModeButton} alt="Theme Button" className={`w-12 cursor-pointer`}/>
    </div>
  )
}

export default DarkMode