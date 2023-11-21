import React, { useEffect, useState } from 'react';
import "./ScrollButton.css";
import { RxPinTop } from "react-icons/rx";
import { scrollTop } from '../../functions/scrolltop';

function ScrollButton() {
  const [active, setActive] = useState(false);
  
  const handleActivation = () => {
    if (window.scrollY > 300) setActive(true);
    else setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleActivation);
    return () => {
      window.removeEventListener("scroll", handleActivation);
    };
  }, []);

  return (
    <div className={`scrollbutton-case${active ? ' active' : ""}`} onClick={scrollTop}>
      <RxPinTop className='scrollbutton-icon' size={36}/>
    </div> 
  )
}

export default ScrollButton;