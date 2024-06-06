import { memo } from "react";
import React from 'react';
import { useEffect, useState } from 'react';
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
const Scroll = memo(() => {
  console.log(window.globalCount++);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return <div className='fixed bottom-2 right-2'>
      <button type='button' onClick={scrollToTop} className={classNames(isVisible ? 'opacity-100' : 'opacity-0', 'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-blue-600 transition-opacity hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 blue:ring-pink-500  ')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className='bi bi-chevron-up' viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
      </button>
      
    </div>;
});
// }

export default Scroll;