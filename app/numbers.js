exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // valueAtBit: function(num, bit) {
  //
  // },

  base10: function(str) {
    var parse= parseInt(str,10);
    return parse.base10(str);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    var help = (a * 10)*(b * 10)/100;
    return help;
    console.log(help);
  }
};
