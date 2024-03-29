import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Isloading } from "./IsLoading";
import React from "react";
import { StoreType } from "../store";

export const ClockApp = React.memo(() => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const sec = Math.floor((time.getSeconds() / 60) * 360);
  const min = Math.floor((time.getMinutes() / 60) * 360 + sec / 60);
  const hour = Math.floor((time.getHours() / 12) * 360 + min / 12);

  const getClockNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 12; i++) {
      const angle = (i - 3) * 30;
      const radius = 91;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      numbers.push(
        <ClockNumber
          key={i}
          style={{ left: `calc(48% + ${x}px)`, top: `calc(44% + ${y}px)` }}
        >
          {i}
        </ClockNumber>
      );
    }

    return numbers;
  };

  const isLoading = useSelector(
    (store: StoreType) => store.appProp.isLoading
  );

  return (
    <div>
      {isLoading ? (
        <Isloading />
      ) : (
        <Wrapper>
          {getClockNumbers()}
          <div
            className='hourHand'
            style={{ transform: `rotate(${hour}deg)` }}
          ></div>
          <div
            className='minHand'
            style={{ transform: `rotate(${min}deg)` }}
          ></div>
          <div
            className='secondHand'
            style={{ transform: `rotate(${sec}deg)` }}
          ></div>
        </Wrapper>
      )}
    </div>
  );
});

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  border: 1px lightgreen solid;
  border-radius: 50%;
  position: relative;

  .hourHand {
    height: 5px;
    width: 5px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;

    &:after {
      content: "";
      height: 60px;
      width: 15px;
      background-color: blue;
      bottom: 0;
      position: absolute;
      transform: translateX(-50%);
      border-radius: 50%;
      border: solid black 1px;
    }
  }

  .minHand {
    height: 5px;
    width: 5px;
    background-color: lightgreen;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    &:after {
      content: "";
      height: 80px;
      width: 10px;
      border: solid black 1px;
      background-color: blue;
      bottom: 0;
      position: absolute;
      transform: translateX(-50%);
      border-radius: 50%;
    }
  }
  .secondHand {
    height: 5px;
    width: 5px;
    background-color: aliceblue;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    &:after {
      content: "";
      height: 80px;
      width: 2px;
      background-color: red;
      bottom: 0;
      position: absolute;
      transform: translateX(-50%);
      border-radius: 50%;
    }
  }
`;

const ClockNumber = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  transform: translateX(-50%, -50%);
`;
