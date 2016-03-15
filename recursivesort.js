
exports.sortarray = function(anarr) {


 // console.log("anarr.length: " + anarr.length);
  if (anarr.length <= 1) {
     return anarr;
  }

      var orarr1;
      var orarr2;
  	  var res = exports.split(anarr);
  	  var unarr1 = res[0];
  	  var unarr2 = res[1];
  	  console.log("unarr1: "+ unarr1);
  	  console.log("unarr2: "+ unarr2);
      if (unarr1.length > 1 ) {
      	//console.log("outputof sortarray: " + exports.sortarray(unarr1));	
      	orarr1 = exports.sortarray(unarr1);
      } else {
      	// array of 1
      	orarr1 = unarr1;
      }
      if (unarr2.length > 1 ) {
        orarr2 = exports.sortarray(unarr2);
      } else {
      	//array of 1
      	orarr2 = unarr2;
      }

  console.log("about to merge orarr1: " + orarr1 + " orarr2: " + orarr2);
  var merged_array = exports.merge(orarr1, orarr2);
  console.log("merged_array = " + merged_array);
  return merged_array;
 // var ordered_array = exports.merge(orarr1, orarr2);
};


exports.split = function(arr1) {
//	console.log("In Split: " + arr1);
	var arrays = [];
	var array1 = [];
	var array2 = [];
	if ((arr1.length % 2) === 0) {
//	console.log("In Split-if=even: " + (arr1.length % 2));  		
       // even
       var halfarray = ((arr1.length)/2);
//    console.log("In Split-halfarray= " + halfarray) ;
       for (var i = 0;i<halfarray; i++) {
//	console.log("In Split-for-even: " + arr1[i]);       	
           array1[i] = arr1[i];
           array2[i] = arr1[i+halfarray]
       }
	} else {
		//odd
		var i; 	
		var halfarray = ((arr1.length-1)/2);

		for (i = 0;i< halfarray; i++) {
 
           array1[i] = arr1[i];
           array2[i] = arr1[i+halfarray]
        }
       array2[i] = arr1[i+halfarray];
	}
	arrays[0] = array1;
	arrays[1] = array2;
    return arrays;
};

exports.merge = function(arr1, arr2) {
//merge 2 ordered arrays togather to form new ordered array
  var ordered_array = [];
  var i = 0
  var j = 0;
  for(var k=0;k<(arr1.length + arr2.length);k++) {
  	console.log("k = " + k);
  	console.log("arr1[i] = " + arr1[i]);
  	console.log("arr2[j] = " + arr2[j]);
    if (i >= arr1.length ) {
    	    	console.log("i outside of array");
      ordered_array[k] = arr2[j];
      j++;
    } else if (j >= arr2.length) {
    	console.log("j outside of array");
      ordered_array[k] = arr1[i];
      i++;
    } else if (arr1[i] <= arr2[j]) {
    	ordered_array[k] = arr1[i];
    	    	console.log("assigning from arr2: k: " + k + ", i:" + i + ", arr1[i]:" + arr1[i]);
    	i++;

    } else {
    	ordered_array[k] = arr2[j];
    	    	console.log("assigning from arr2: k: " + k + ", j:" + j + ", arr2[j]:" + arr2[j]);
    	j++;
    }
  }

  return ordered_array
  
  //return [1,2]
};

