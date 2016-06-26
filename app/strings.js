exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function(str, amount) {
        var count = 0;
        var newString = '';
        for (var i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
                if (count < amount) {
                    newString += str[i];
                }
            } else {
                count = 0;
                newString += str[i];
            }
        };
        return newString;
    },

    wordWrap: function(str, cols) {
        var newString = '',
            newArray = [];
        newArray = str.split(' ');
        newString = newArray[0];
        for (var i = 1; i < newArray.length; i++) {
            if (newArray[i].length > cols) {
                newString += '\n' + newArray[i];
            } else {
                if (newString.length + newArray[i].length > cols) {
                    newString += '\n' + newArray[i];
                } else {
                    newString += ' ' + newArray[i];
                }
            }
        }
        return newString;
    },

    reverseString: function(str) {
        return str.split('').reverse().join('');
    }
};
