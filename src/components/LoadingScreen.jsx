import { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';
import Ondas from '../assets/ondasLaranja.svg';
import Logo from '../assets/images/Logo.png'
import { gsap, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [heightPercentage, setHeightPercentage] = useState(100);
  const [counterPercentage, setCounterPercentage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const wavesRef = useRef(null);

  useEffect(() => {
    if (!isAnimating) return;

    const animationDuration = 4000;
    const updateInterval = 100;
    const totalUpdates = animationDuration / updateInterval;

    let currentUpdate = 0;
    const heightValues = generateDecreasingRandomValues(totalUpdates);

    const interval = setInterval(() => {
      if (currentUpdate < heightValues.length) {
        const newHeight = heightValues[currentUpdate];
        setHeightPercentage(newHeight);
        setCounterPercentage(100 - newHeight);
        currentUpdate++;
      } else {
        setHeightPercentage(0);
        setCounterPercentage(100);
        setIsAnimating(false);
        clearInterval(interval);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 100);
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isAnimating, onLoadingComplete]);

  // Animar ondas acompanhando o efeito
  useEffect(() => {
    if (wavesRef.current) {
      gsap.to(wavesRef.current, {
        yPercent: heightPercentage - 100,
      });
    }
  }, [heightPercentage]);

  const generateDecreasingRandomValues = (count) => {
    const values = [100];
    let current = 100;

    for (let i = 1; i < count; i++) {
      const randomDecrease = Math.floor(Math.random() * (current * 0.15) + 1);
      current = Math.max(0, current - randomDecrease);
      values.push(current);
    }

    // Garantir que o último valor seja 0
    values[values.length - 1] = 0;

    return values;
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isAnimating && wavesRef.current) {
      gsap.to(wavesRef.current,
        {
          xPercent: -50,
          duration: 12,
          ease: 'linear',
          repeat: -1,
        }
      );
    }
  }, [isAnimating]);

  return (
    <div className="loading-screen-container">
      <div
        className="loading-screen-overlay"
        style={{ height: `${heightPercentage}%` }}
      >
        <div ref={wavesRef} className='fixed flex w-full'>
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0'/>
          <img src={Ondas} alt="" aria-hidden="true" className='min-w-full shrink-0'/>
        </div>
        <div className='flex justify-center items-end'>
          <img 
            src={Logo} 
            alt='Logo'
            className='w-100'>  
          </img>
        </div>
      </div>
      <div className={`loading-counter ${!isAnimating ? 'hidden' : ''}`}>
        <span>{counterPercentage}%</span>
      </div>
    </div>
  );
}
