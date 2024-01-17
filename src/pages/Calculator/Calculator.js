import './style.css';
import { useState } from 'react';

function Calculator() {

    let lastElementInDisplay;
    let secondLastElementInDisplay;
    let result = 0;

    const [resultDisplay, setResultDisplay] = useState(0);
    const [display, setDisplay] = useState(" ");
    const [currentMathOperator, setCurrentMathOperator] = useState("");

    const resetAll = () => {
        setResultDisplay(0);
        setDisplay("");
    }

    const resetDisplay = () => {
        setDisplay(" ");
    }

    const addNumberToDisplay = (num) => {

        lastElementInDisplay = display[display.length - 1];
        secondLastElementInDisplay = display[display.length - 2];

        if (lastElementInDisplay === "+" || lastElementInDisplay === "-" || lastElementInDisplay === "*" || lastElementInDisplay === "/"){
            setDisplay(display + " " + num);
            result = display + num;
        }
        else if (lastElementInDisplay !== "0" || secondLastElementInDisplay !== " ") {
            /* Check if last Input was 0 and if second last Input was " ". If yes you can't add more zero's */
            setDisplay(display + num);
            result = display + num;
        }
        /*
        else {
            setDisplay(display + num);
            result = display + num;
        }*/
        
    }

    const mathOperator = (operator) => {
        
        lastElementInDisplay = display[display.length - 1]
        if (lastElementInDisplay !== "+" && lastElementInDisplay !== "-" && lastElementInDisplay !== "*" && lastElementInDisplay !== "/"){
            setDisplay(display + " " + operator);
        }
        if (lastElementInDisplay !== operator){
            
        }
        setCurrentMathOperator(operator);
    }

    const displayResult = () => {
        setResultDisplay(eval(display));
    }

    return (
        <div>
            <h2>Calculator</h2>
            
            <div className='calculator'> 
                <div className='result'>{resultDisplay}</div>
                <div className='display'>{display}</div>
                <div><button onClick={resetAll}>CE</button></div>
                <div><button onClick={resetDisplay}>C</button></div>
                <div><button disabled>x^2</button></div>
                <div><button onClick={(e) => mathOperator("/")}>/</button></div>
                <div><button onClick={(e) => addNumberToDisplay(7)}>7</button></div>
                <div><button onClick={(e) => addNumberToDisplay(8)}>8</button></div>
                <div><button onClick={(e) => addNumberToDisplay(9)}>9</button></div>
                <div><button onClick={(e) => mathOperator("*")}>*</button></div>
                <div><button onClick={(e) => addNumberToDisplay(4)}>4</button></div>
                <div><button onClick={(e) => addNumberToDisplay(5)}>5</button></div>
                <div><button onClick={(e) => addNumberToDisplay(6)}>6</button></div>
                <div><button onClick={(e) => mathOperator("-")}>-</button></div>
                <div><button onClick={(e) => addNumberToDisplay(1)}>1</button></div>
                <div><button onClick={(e) => addNumberToDisplay(2)}>2</button></div>
                <div><button onClick={(e) => addNumberToDisplay(3)}>3</button></div>
                <div><button onClick={(e) => mathOperator("+")}>+</button></div>
                <div><button disabled>+/-</button></div>
                <div><button onClick={(e) => addNumberToDisplay(0)}>0</button></div>
                <div><button disabled>.</button></div>
                <div><button onClick={(e) => displayResult()}>=</button></div>
            </div>
        </div>
        
    )
}

export default Calculator;