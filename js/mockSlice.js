Array.prototype.mockSlice = function (start = 0, end) {
  var res = [];
  end = end || this.length;
  for (let i = start; i < end; i++) {
    res.push(this[i]);
  }
  return res;
};
