import React, { useEffect } from 'react';
import './bootstrap.min.css';
import './style.css';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let fontSize = 200 - scrollPosition * 0.03;

      let scrollText = document.getElementById('zoom-text');
      if (scrollText) {
        scrollText.style.fontSize = fontSize + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div className="container second-none">
          <div className="d-flex justify-content-center">
            <div className="env-text d-flex text-center">
              <h1 className="zoom-text" id="zoom-text" style={{fontSize: '20rem'}}>
                Plan<span style={{ color: '#0b54a2' }}> SMARTER</span>,<br />Save <span style={{ color: '#0b54a2' }}> WISER</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
