exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        return arr.indexOf(item);
        ///or
        // for ( var i = 0; i < arr.length; i++ ){
        //   if (arr[i]===index){
        //     return i;
        //   }
        // }
    },

    sum: function(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total
    },

    remove: function(arr, item) { ////NOT WORKING
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i--, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy: function(arr, item) { //NOT WORKING
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i--, 1);
            }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;

    },

    truncate: function(arr) {
        arr.pop();
        return arr;

    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift();
        return arr;
    },

    concat: function(arr1, arr2) {
        var arr3 = arr1.concat(arr2);
        return arr3;
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) { ///not working
        arr.filter(function(element) {
            if (element === item) {
                return element.length;
            }
        })
        return arr;
    },

    duplicates: function(arr) {


    },

    square: function(arr) {
        Math.pow(arr[index], 2);
        return arr;
    },

    findAllOccurrences: function(arr, target) {

    }
};
