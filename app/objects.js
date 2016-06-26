exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    // var obj1 = "";
    // var obj = "";
    // return constructor.call(greeting);

  },

  iterate: function(obj) {

  }
};
