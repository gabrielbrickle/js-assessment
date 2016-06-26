exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        return arr.indexOf(item);
        // /or
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
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates: function(arr) {
      var exists=[];
      var dupes=[];
      for (var i = 0; i < arr.length; i++) {
        if(exists.indexOf(arr[i])=== -1) {
          exists.push(arr[i]);
        } else if (dupes.indexOf(arr[i]) === -1) {
          dupes.push(arr[i])
        }
      }
      return dupes;
    },

    square: function(arr) {
      var newArray=[]
      for (var i = 0; i < arr.length; i++) {
        var power=Math.pow(arr[i],2);
        newArray.push(power);
      }
      return newArray;
    },

    findAllOccurrences: function(arr, target) {
      var newArray= [];
      for (var i = 0; i < arr.length; i++) {
        if (target === arr[i])
        newArray.push(i);
      }
      return newArray;
    }
};
