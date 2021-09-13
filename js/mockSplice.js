Array.prototype.mockSplice = function () {
  var res = [];
  var start = arguments[0];
  var count = arguments[1];
  var len = arguments.length;
  if (len == 2) {
    return this.slice(0, start).concat(this.slice(start + count, this.length));
  }
  if (len > 2) {
    var tmp = [];
    for (let i = 2; i < len; i++) {
      tmp.push(arguments[i]);
    }
    if (count == 0) {
      return this.slice(0, start)
        .concat(tmp)
        .concat(this.slice(start + 1));
    } else {
      return this.slice(0, start)
        .concat(tmp)
        .concat(this.slice(start + count, this.length));
    }
  }
};
