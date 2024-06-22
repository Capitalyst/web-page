import React, { useEffect } from 'react';
import './bootstrap.min.css';
import './style.css';

import star1 from '../../assets/img/star1.svg';
import star2 from '../../assets/img/star2.svg';
import star3 from '../../assets/img/star3.svg';
import coin1 from '../../assets/img/coin1.svg';

const First: React.FC = () => {
  useEffect(() => {
    const parallax = () => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");

        if (movingValue) {
          const intValue = parseInt(movingValue, 10);
          const x = (400 * intValue) / 150;
          const y = (400 * intValue) / 150;

          // Ensure move.style exists and is of type CSSStyleDeclaration
          if (move instanceof HTMLElement) {
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
          }
        }
      });
    };

    document.addEventListener("scroll", parallax);

    return () => {
      document.removeEventListener("scroll", parallax);
    };
  }, []);

  return (
    <>
      <section>
        <div className="container abt text-con">
          <img id="star1" className="rotate" src={star1} alt="Star 1" />
          <img id="star2" className="rotate" src={star2} alt="Star 2" />
          <img id="star3" className="rotate" src={star3} alt="Star 3" />
          <img id="coin1" className="rotates object" data-value="9" src={coin1} alt="Coin 1" />

          <div className="row d-flex justify-content-center">
            <div className="col-9 d-flex text-center text-1">
              <p>
                Unlock your financial potential with <span className="g-color">WiseVault</span> – where smart planning meets effortless management. Secure your future, one wise decision at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;