// A
var isArmstrong = function(n) {
	"use strict";
	var sum = 0;
	//convert to String
	n = String(n);
	//traverse n
	for(var i = 0; i < n.length; ++i)
		sum = sum + Math.pow(Number(n[i]), n.length);
	if(Number(n) == sum){
		return true;
	}
	else {
		return false;
	}
};
// B
var allArmstrongs = function() {
	"use strict";
	//creating empty array to hold armstrong numbers
	var armstrongArray = [];
	//iterating through possible 3 digit numbers
	//and adding armstrong numbers to array
	for(var i = 1; i < 100000; ++i) {
		if (isArmstrong(i)) {
		armstrongArray.push(i);
		} 
	}
	//creating empty string
	var finalString = "";
	//iterating through all valid armstrong numbers found
	//and adding them to finalString with a space.
	for(var j = 0; j < armstrongArray.length; ++j) {
		finalString += armstrongArray[j] + ' ';
	}
	console.log(finalString);
	//this prints the string.
};
// C
var allSubstrings1 = function(string) {
	"use strict";
	var result = "";
	for(var i = 0; i <= string.length; i++) {
        for(var j = i+1; j <= string.length; j++) {
        	result = result + string.substring(i,j) + ', ' + ' ';
        }
	}
	return result;
};
// D
var allSubstrings2 = function(string) {
	"use strict";
	// create empty array.
	var result = [];
	for(var i = 0; i <= string.length; i++) {
        for(var j = i+1; j <= string.length; j++) {
        // variable that creates substring of string and assigns to b. 
        var b = string.substring(i,j);
        // pushes the substrings into the empty array called result.
        result.push(b);
        }
	}
	return result;
};
// E
var maxWord = function(string) {
	"use strict"
	// Seperates the entered string into substrings.
	// Turns the variable word into an empty value by assigning it to null.
	var sep = string.split(" "), max = 0, word = null;
	// Loops through string checking each substring and evaluates if substring is longer 
	// than the other.
	for (var i = 0; i < sep.length; ++i) {
		if (max < sep[i].length) {
			max = sep[i].length;
			word = sep[i];
		}
	}
	return word;
};