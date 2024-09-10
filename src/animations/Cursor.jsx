import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 1,
        ease: "back.out"
      });
    };

    const showCursor = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.1
      })
    }


    const hideCursor = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.1
      })
    }

    hideCursor();

    window.addEventListener('mousemove', showCursor);
    window.addEventListener('mouseout', hideCursor);
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', showCursor);
      window.removeEventListener('mouseout', hideCursor);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);


  return <div ref={cursorRef} className="cursor"></div>;
}

export default Cursor;
