import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import gsap from 'gsap';
import './TruckButton.css'; // Import the CSS file for styling

const TruckButton = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (e) => {
    e.preventDefault();

    const button = e.currentTarget;
    const box = button.querySelector('.box');
    const truck = button.querySelector('.truck');

    if (!button.classList.contains('done')) {
      if (!button.classList.contains('animation')) {
        button.classList.add('animation');

        gsap.to(button, {
          '--box-s': 1,
          '--box-o': 1,
          duration: 0.3,
          delay: 0.5,
        });

        gsap.to(box, {
          x: 0,
          duration: 0.4,
          delay: 0.7,
        });

        gsap.to(button, {
          '--hx': -5,
          '--bx': 50,
          duration: 0.18,
          delay: 0.92,
        });

        gsap.to(box, {
          y: 0,
          duration: 0.1,
          delay: 1.15,
        });

        gsap.set(button, {
          '--truck-y': 0,
          '--truck-y-n': -26,
        });

        gsap.to(button, {
          '--truck-y': 1,
          '--truck-y-n': -25,
          duration: 0.2,
          delay: 1.25,
          onComplete() {
            gsap.timeline({
              onComplete() {
                button.classList.add('done');
                navigate('/orders'); // Navigate after animation completes
              },
            })
              .to(truck, {
                x: 0,
                duration: 0.4,
              })
              .to(truck, {
                x: 40,
                duration: 1,
              })
              .to(truck, {
                x: 20,
                duration: 0.6,
              })
              .to(truck, {
                x: 96,
                duration: 0.4 });

            gsap.to(button, {
              '--progress': 1,
              duration: 2.4,
              ease: 'power2.in',
            });
          },
        });
      }
    } else {
      button.classList.remove('animation', 'done');
      gsap.set(truck, {
        x: 4,
      });
      gsap.set(button, {
        '--progress': 0,
        '--hx': 0,
        '--bx': 0,
        '--box-s': 0.5,
        '--box-o': 0,
        '--truck-y': 0,
        '--truck-y-n': -26,
      });
      gsap.set(box, {
        x: -24,
        y: -6,
      });
    }
  };

  return (
    <div>
      <button className="truck-button" onClick={handleClick}>
        <span className="default">Complete Order</span>
        <span className="success">
          Order Placed
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div className="truck">
          <div className="wheel"></div>
          <div className="back"></div>
          <div className="front"></div>
          <div className="box"></div>
        </div>
      </button>
      
      {/* Dribbble link with image */}
      <a className="dribbble" href="https://dribbble.com/shots/9552163-Complete-order-button" target="_blank" rel="noopener noreferrer">
        
      </a>
    </div>
  );
};

export default TruckButton;
