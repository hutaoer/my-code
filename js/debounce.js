// 高频事件触发，触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。
// 函数防抖

// n 秒后执行 1次，

function debounce(fn, time) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = sthisetTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

// 简单版
function debounce(fn, wait) {
	let timer;
	return function() {
		const context = this
		const args = arguments
		clearTimeout(timer)
		timer = setTimeout(function() {
			fn.apply(context, args)
		}, wait)
	}
}

// 高级版。支持 this, event, 立即执行，有返回值，支持取消

function debounce_v2(fn, wait, immediate) {
	var timer, result;

	var debounce = function() {
		var ctx = this
		var args = arguments
		if(timer) clearTimeout(timer)
		if(immediate) {
			var callNow = !timer
			timer = setTimeout(function() {
				timer = null
			}, wait)
			if(callNow) {
				result = fn.apply(ctx, args)
			}
		} else {
			timer = setTimeout(function() {
				fn.apply(ctx, args)
			}, wait)
		}
		return result
	}

	debounce.cancel = function() {
		clearTimeout(timer)
		timer = null
	}

	return debounce_v2
}


