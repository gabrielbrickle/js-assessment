exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
      // return function(str) {
      //
      // }

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {
    // var partialFunciton = function (function) {
    //   return function (fn, str1, str2)
    // }
    // return function;
  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },
  //
  // curryIt: function(fn) {////

};
