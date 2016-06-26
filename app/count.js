exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var time;
    function count () {
      console.log(start++);
      if (start <= end) {
        time = setTimeout(doIt, 100);
      }
    }
    count();
  }
};
