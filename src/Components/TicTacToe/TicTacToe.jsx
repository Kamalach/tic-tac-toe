import React, { useEffect, useRef, useState } from "react";
import "./TicTacToe.css";
import { IoIosRadioButtonOff, IoMdClose } from "react-icons/io";
import cross_icon from "../Assets/cross.png";
import circle_icon from "../Assets/circle.png";

let data = ["", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${cross_icon}>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${circle_icon}>`;
      data[num] = "0";
      setCount(++count);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congartulations:<img src=${cross_icon}`;
    } else {
      titleRef.current.innerHTML = `Congartulations:<img src=${cross_icon}`;
    }
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[2] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[3] === data[4] && data[5] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[7] && data[7] !== "") {
      won(data);
    } else if (data[0] === data[3] && data[3] && data[7] !== "") {
      won(data);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
    }
  }
   

    return (
      <div className="container">
        <h1 className="title">
          {"titleRef"}
          Tic Tac Toe GAme In <span> React</span>
        </h1>
        <div className="board">
          <button className="reset">Reset</button>
          <div className="row1">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 1);
              }}
            >
            </div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 2);
              }}
            >
              
            </div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 3);
              }}
            >
              
            </div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 4);
              }}
            >
            </div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 5);
              }}
            >
              
            </div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 6);
              }}
            >
              
            </div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 7);
              }}
            >
            </div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            >
              
            </div>
          </div>
        </div>
        <IoIosRadioButtonOff />
        <IoMdClose />
      </div>
    );
  };


export default TicTacToe;
