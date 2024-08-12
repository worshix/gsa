'use client'
import React, { useState } from 'react';

const AboutButton = ({ id }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    const container = document.getElementById(id);
    container.classList.toggle('compressed');
    const aboutText = container.querySelector('.compressed-about');
    
    if (expanded) {
      aboutText.style.maxHeight = '0';
    } else {
      aboutText.style.maxHeight = aboutText.scrollHeight + 'px';
    }
    
    setExpanded(!expanded);
  };

  return (
    <button 
      type="button" 
      className="mt-4 flex items-center text-main-500 font-bold transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <span className="mr-2">
        {expanded ? 'Show less' : 'Read more'}
      </span>
      <div className="bg-slate-200 p-2 rounded-full flex items-center justify-center w-8 h-8 transition-transform duration-300 transform rotate-0">
        <i className={`bi bi-chevron-${expanded ? 'up' : 'down'} text-black`}></i>
      </div>
    </button>
  );
};

export default AboutButton;
