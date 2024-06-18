import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{input}</div>
      <div className={styles.buttons}>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className={styles.operator} onClick={() => handleClick("/")}>
          /
        </button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className={styles.operator} onClick={() => handleClick("*")}>
          *
        </button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className={styles.operator} onClick={() => handleClick("-")}>
          -
        </button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className={styles.clear} onClick={() => handleClear()}>
          C
        </button>
        <button className={styles.operator} onClick={() => handleClick("+")}>
          +
        </button>

        <button className={styles.equals} onClick={() => handleCalculate()}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
