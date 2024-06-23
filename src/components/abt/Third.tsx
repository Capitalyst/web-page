import { useState, useEffect } from 'react'
import './bootstrap.min.css'
import './style.css'

const App: React.FC = () => {
  const [_buttonColors, setButtonColors] = useState<{ [key: string]: string }>({});
  const [activeButtons, setActiveButtons] = useState<{ [key: string]: string }>({});

  const handleButtonClick = (questionId: string, buttonId: string, color: string) => {
    setActiveButtons((prevActiveButtons) => ({
      ...prevActiveButtons,
      [questionId]: buttonId,
    }));
    setButtonColors((prevColors) => ({
      ...prevColors,
      [buttonId]: color,
    }));
  };

  useEffect(() => {
    const parallax = (e: MouseEvent) => {
      document.querySelectorAll(".object").forEach((move) => {
        const element = move as HTMLElement;
        const moving_value = parseInt(element.getAttribute("data-value") || '0', 10);
        const x = (e.clientX * 0.7 * moving_value) / 95;
        const y = (e.clientY * 0.8 * moving_value) / 95;

        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <section>
      <div className="cards-2">
        <img id="leaf1" src="assets\img\leaf1.svg" data-value="-5" className="object" />
        <img id="leaf2" src="assets\img\leaf2.svg" data-value="-8" className="object" />
        <img id="leaf3" src="assets\img\leaf3.svg" data-value="7" className="object" />
        <img id="leaf4" src="assets\img\leaf4.svg" data-value="-6" className="object" />
        <img id="leaf5" src="assets\img\leaf5.svg" data-value="-1" className="object" />
        <img id="leaf6" src="assets\img\leaf6.svg" data-value="6" className="object" />
        <img id="leaf7" src="assets\img\leaf7.svg" data-value="-6" className="object" />
      </div>

      <div className="cards-1">
        <div className="blue-t">
          <h3>If you invested $100 in Microsoft in 1986, how much would it be worth today?</h3>
          <br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q1', 'btn1', 'red')} 
            style={{ backgroundColor: activeButtons['q1'] === 'btn1' ? 'red' : 'initial' }}
          >
            $15000
          </button> 
          <br /><br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q1', 'btn2', 'green')} 
            style={{ backgroundColor: activeButtons['q1'] === 'btn2' ? 'green' : 'initial' }}
          >
            $50000
          </button>
        </div>
      </div>

      <div className="cards-3">
        <img id="lock1" src="assets\img\lock1.svg" data-value="-3" className="object" />
        <img id="lock2" src="assets\img\lock2.svg" data-value="5" className="object" />
        <img id="lock3" src="assets\img\lock3.svg" data-value="6" className="object" />
        <img id="lock4" src="assets\img\lock4.svg" data-value="-4" className="object" />
        <img id="lock5" src="assets\img\lock5.svg" data-value="-3" className="object" />
        <img id="lock6" src="assets\img\lock6.svg" data-value="4" className="object" />
        <img id="lock7" src="assets\img\lock7.svg" data-value="5" className="object" />
        <img id="lock8" src="assets\img\lock8.svg" data-value="6" className="object" />
        <img id="lock9" src="assets\img\lock9.svg" data-value="-7" className="object" />
        <img id="lock10" src="assets\img\lock10.svg" data-value="3" className="object" />
        <img id="lock11" src="assets\img\lock11.svg" data-value="-5" className="object" />
      </div>

      <div className="cards-1">
        <div className="green-t">
          <h3>Percentage millennials having less than $10,000 in savings?</h3>
          <br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q2', 'btn3', 'red')} 
            style={{ backgroundColor: activeButtons['q2'] === 'btn3' ? 'red' : 'initial' }}
          >
            30%
          </button> 
          <br /><br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q2', 'btn4', 'green')} 
            style={{ backgroundColor: activeButtons['q2'] === 'btn4' ? 'green' : 'initial' }}
          >
            60%
          </button>
        </div>
      </div>

      <div className="cards-4">
        <img id="drop1" src="assets\img\drop1.svg" data-value="2" className="object" />
        <img id="drop2" src="assets\img\drop2.svg" data-value="-2" className="object" />
        <img id="drop3" src="assets\img\drop3.svg" data-value="2" className="object" />
        <img id="drop4" src="assets\img\drop4.svg" data-value="-2" className="object" />
        <img id="drop5" src="assets\img\drop5.svg" data-value="2" className="object" />
        <img id="drop6" src="assets\img\drop6.svg" data-value="-2" className="object" />
        <img id="drop7" src="assets\img\drop7.svg" data-value="2" className="object" />
        <img id="drop8" src="assets\img\drop8.svg" data-value="-2" className="object" />
        <img id="drop9" src="assets\img\drop9.svg" data-value="2" className="object" />
        <img id="drop10" src="assets\img\drop10.svg" data-value="-2" className="object" />
        <img id="drop11" src="assets\img\drop11.svg" data-value="2" className="object" />
        <img id="drop12" src="assets\img\drop12.svg" data-value="-2" className="object" />
        <img id="drop13" src="assets\img\drop13.svg" data-value="2" className="object" />
        <img id="drop14" src="assets\img\drop14.svg" data-value="-2" className="object" />
        <img id="drop15" src="assets\img\drop15.svg" data-value="2" className="object" />
      </div>

      <div className="cards-1">
        <div className="skyblue-t">
          <h3>World's first paper money was created in</h3>
          <br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q3', 'btn5', 'green')} 
            style={{ backgroundColor: activeButtons['q3'] === 'btn5' ? 'green' : 'initial' }}
          >
            China
          </button>
          <br /><br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q3', 'btn6', 'red')} 
            style={{ backgroundColor: activeButtons['q3'] === 'btn6' ? 'red' : 'initial' }}
          >
            England
          </button>
        </div>
      </div>

      <div className="cards-5">
        <img id="cl1" src="assets\img\cl1.svg" data-value="2" className="object" />
        <img id="cl2" src="assets\img\cl2.svg" data-value="-2" className="object" />
        <img id="cl3" src="assets\img\cl3.svg" data-value="2" className="object" />
        <img id="cl4" src="assets\img\cl4.svg" data-value="-2" className="object" />
        <img id="cl5" src="assets\img\cl5.svg" data-value="2" className="object" />
        <img id="cl6" src="assets\img\cl6.svg" data-value="-2" className="object" />
        <img id="cl7" src="assets\img\cl7.svg" data-value="2" className="object" />
        <img id="cl8" src="assets\img\cl8.svg" data-value="-2" className="object" />
        <img id="cl9" src="assets\img\cl9.svg" data-value="2" className="object" />
        <img id="cl10" src="assets\img\cl10.svg" data-value="-2" className="object" />
        <img id="cl11" src="assets\img\cl11.svg" data-value="2" className="object" />
        <img id="cl12" src="assets\img\cl12.svg" data-value="-2" className="object" />
        <img id="cl13" src="assets\img\cl13.svg" data-value="2" className="object" />
      </div>

      <div className="cards-1">
        <div className="orange-t">
          <h3>Cost of making a penny?</h3>
          <br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q4', 'btn7', 'green')} 
            style={{ backgroundColor: activeButtons['q4'] === 'btn7' ? 'green' : 'initial' }}
          >
            1.7 cents
          </button> 
          <br /><br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q4', 'btn8', 'red')} 
            style={{ backgroundColor: activeButtons['q4'] === 'btn8' ? 'red' : 'initial' }}
          >
            1 cent
          </button>
        </div>
      </div>

      <div className="cards-5">
        <img id="cr1" src="assets\img\cr1.svg" data-value="1" className="object" />
        <img id="cr2" src="assets\img\cr2.svg" data-value="-1" className="object" />
        <img id="cr3" src="assets\img\cr3.svg" data-value="1" className="object" />
        <img id="cr4" src="assets\img\cr4.svg" data-value="-1" className="object" />
        <img id="cr5" src="assets\img\cr5.svg" data-value="1" className="object" />
        <img id="cr6" src="assets\img\cr6.svg" data-value="-1" className="object" />
        <img id="cr7" src="assets\img\cr7.svg" data-value="1" className="object" />
        <img id="cr8" src="assets\img\cr8.svg" data-value="-1" className="object" />
        <img id="cr9" src="assets\img\cr9.svg" data-value="1" className="object" />
        <img id="cr10" src="assets\img\cr10.svg" data-value="-1" className="object" />
        <img id="cr11" src="assets\img\cr11.svg" data-value="1" className="object" />
        <img id="cr12" src="assets\img\cr12.svg" data-value="-1" className="object" />
        <img id="cr13" src="assets\img\cr13.svg" data-value="1" className="object" />
        <img id="cr14" src="assets\img\cr14.svg" data-value="-1" className="object" />
        <img id="cr15" src="assets\img\cr15.svg" data-value="1" className="object" />
      </div>

      <div className="cards-1">
        <div className="red-t">
          <h3>Where were the first coins made?</h3>
          <br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q5', 'btn9', 'green')} 
            style={{ backgroundColor: activeButtons['q5'] === 'btn9' ? 'green' : 'initial' }}
          >
            Greece
          </button> 
          <br /><br />
          <button 
            className="btn1" 
            onClick={() => handleButtonClick('q5', 'btn10', 'red')} 
            style={{ backgroundColor: activeButtons['q5'] === 'btn10' ? 'red' : 'initial' }}
          >
            China
          </button>
        </div>
      </div>
    </section>
  );
};


export default App;
