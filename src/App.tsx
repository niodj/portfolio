import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { CounterApp } from "./Counter/CounterApp";
import { TodolistApp } from "./Todolist/TodolistApp";
import { QueueApp } from "./Queue/QueueApp";
import { Rating } from "./tools/Rating";
import React, { useEffect, useState } from "react";
import { SqlConnect } from "./SqlConnect/SqlConnect";
import useResize from "./tools/useResize";
import { NavMenu } from "./tools/NavMenu";
import { Button } from "@mui/material";
import { CostListApp } from "./Costlist/CostListApp";
import { Skills } from "./tools/Skills";
import { SendMessage } from "./tools/SendMessage";
import { SunMoon } from "./tools/SunMoon";
import { ClockApp } from "./tools/ClockApp";
import { useDispatch } from "react-redux";
import Login from "./tools/Login/Login";
import { useSelector } from "react-redux";
import { StoreType } from "./store";
import { WebsocketChat } from "./WebsocketChat/WebsocketChat";
import { TasktrackerApp } from "./Tasktracker/TaskrackerApp";

export const App = React.memo(() => {
  const [width, height] = useResize();
  const isContentOverflowing = height > window.innerHeight;

  const dispatch = useDispatch();

  //////////dark mode
  const currentHour = new Date().getHours();
  useEffect(() => {
    currentHour >= 19 || currentHour < 6
      ? dispatch({ type: "NIGHT_NOW" })
      : dispatch({ type: "DAY_NOW" });
  }, []);
  const dark = useSelector((state: StoreType) => state.appProp.dark);
  ///////////////
  return (
    <Wrapper $dark={dark} $overflowHidden={isContentOverflowing}>
      <Login />
      <SunMoon />
      <div
        className='clockWrapper'
        onClick={() => {
          dispatch({ type: "id" });
        }}
      >
        <ClockApp />
      </div>

      <div className='buttons'>
        <Button
          variant={"outlined"}
          onClick={() => dispatch({ type: "DAY_NOW" })}
        >
          Day
        </Button>
        <Button
          variant={"outlined"}
          color={"secondary"}
          onClick={() => dispatch({ type: "NIGHT_NOW" })}
        >
          Night
        </Button>
      </div>

      <Title>
        <div>Anton Potapenko Full Stack Developer</div>
        <div>Welcome to the portfolio page of my pet projects</div>
        <div className='bntModalandCv'>
          <a
            href={
              "https://cv.djinni.co/ce/43960c85ce2c1b5b8b0ad72ddae9dd/CV_Anton_Fullstack_JS.pdf"
            }
            target={"_blank"}
          >
            <Button>Open my CV</Button>
          </a>
          <SendMessage />
        </div>
      </Title>
      <div className='rattingAndSkils'>
        <Rating />
        <Skills />
      </div>

      <Routes>
        <Route path='/' element={<NavMenu dark={dark} />}>
          <Route index element={<TodolistApp />}></Route>
          <Route path='costlist' element={<CostListApp />} />
          <Route path='counterapp' element={<CounterApp />} />
          <Route path='todolistapp' element={<TodolistApp />} />
          <Route path='queueapp' element={<QueueApp />} />
          <Route path='sqlconnect' element={<SqlConnect />} />
          <Route path='chat' element={<WebsocketChat />} />
          <Route path='tasktracker' element={<TasktrackerApp />} />
          <Route path='*' element={<div>.</div>} />
        </Route>
      </Routes>
    </Wrapper>
  );
});

const Wrapper = styled.div<{ $dark: boolean; $overflowHidden: boolean }>`
  color: ${(props: { $dark: boolean }) => (props.$dark ? "white" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttons {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
  }

  .loader1 {
    width: 50px;
    height: 50px;
  }
  .clockWrapper {
    position: absolute;
  }
  .bntModalandCv {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  text-align: center;
  background-image: ${(props: { $dark: boolean }) =>
    props.$dark
      ? `url(https://i.pinimg.com/originals/28/6b/05/286b059cbd36184d2b6795578a1ee620.jpg)`
      : `url(https://i.pinimg.com/originals/55/e1/c0/55e1c0d248a679ad24cc04ea694b78aa.jpg)`};
  background-attachment: fixed;
  transition: background-image 6s ease-in-out;
  overflow: ${(props: { $overflowHidden: boolean }) =>
    props.$overflowHidden ? "hidden" : "visible"};
  min-height: 100vh;
  background-size: cover;

  .rattingAndSkils {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Title = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: large;
  color: blueviolet;
  text-align: center;
`;


const StyledNavLink = styled.div`
  text-decoration: none;
  padding: 1rem;
  border: lightgreen solid;
  margin: 10px;
  color: darkviolet;
  background: rgba(255, 255, 255, 0.6);


  &:hover {
    background-color: lightgreen;
    cursor: pointer;

  }

  &.active {
    background-color: lightgreen;
    border-radius: 20px;
  }

  /* &.active:hover {
    border-radius: 20px;

  } */


`