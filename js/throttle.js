// 高频事件触发， n秒内仅执行一次
function throttle(fn, time) {
  let run = true;
  return function () {
    if (!run) return;
    run = false;
    fn.apply(this, arguments);
    setTimeout(() => {
      run = true;
    }, time);
  };
}

export default throttle;
