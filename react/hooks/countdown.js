import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const COUNTDOWN_SECONDS = 5;

// 倒计时器
function Countdown() {
  // 计时中标识
  const [timing, setTiming] = useState(false);
  // 当前秒数
  const [second, setSecond] = useState(COUNTDOWN_SECONDS);

  // 首次渲染和 timing 变化时触发 effect
  // setInterval() 版本
  // useEffect(() => {
  //   let interval
  //   // 开始倒计时
  //   if (timing) {
  //     interval = setInterval(() => {
  //       setSecond(preSecond => {
  //         if (preSecond <= 1) {
  //           setTiming(false)
  //           clearInterval(interval)
  //           // 重置秒数
  //           return COUNTDOWN_SECONDS
  //         } else {
  //           return preSecond - 1
  //         }
  //       })
  //     }, 1000)
  //   }
  //   return () => clearInterval(interval)
  // }, [timing])

  // 首次渲染和 timing 变化时触发 effect
  // setTimeout() 版本
  useEffect(() => {
    let timer;

    function countdown() {
      setSecond((preSecond) => {
        if (preSecond <= 1) {
          setTiming(false);
          // 重置秒数
          return COUNTDOWN_SECONDS;
        } else {
          timer = setTimeout(countdown, 1000);
          return preSecond - 1;
        }
      });
    }
    // 开始倒计时
    if (timing) {
      timer = setTimeout(countdown, 1000);
    }
    return () => clearTimeout(timer);
  }, [timing]);

  return (
    <div className="container">
      <button disabled={timing} onClick={() => setTiming(true)}>
        {timing ? "Timing " + second : "Go"}
      </button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Countdown />, rootElement);
