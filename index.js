function dwarfRollCall(dwarves) {
  //output is a string...so define an empty string
  var result = '';
  //iterate through array to access array values
  for (let i = 0; i < dwarves.length; i++) {
    //values in dwarves = dwarves[i];
    //add values to result string
    //Template literal: (index + 1) (dwarves[i]) because index starts at 0;
    result += `${i+1}. ${dwarves[i]} `
  }
  return result;
}

function summonCaptainPlanet(planeteerCalls) {
  //we want to transform each call and return a new array...Map will help us here
  //assign mapped calls that are capitalized to a new variable calls //Not quite necessary but makes code more intuitive
  //MDN --> The map() method creates a new array with the results of calling a provided function on every element in the calling array.
  //map transform elements inside array and returns the changed values to a new array
  //return calls
  return planeteerCalls.map(call => call.toUpperCase() + "!" )
}

function longPlaneteerCalls(words) {
  //input - words is an array with every word that is a string
  //output - Boolean
  //iterate through array words to access each "word" through its index
  //insert conditional to return true if true
  //else - it is false
  for (let i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
  }	
	return false;
}

function findTheCheese (foods) {
  //inputs - foods array and a new defined variable cheeses array
  //outputs - first cheese = the cheese in foods array
  //iterate over foods array and access each element aka food
  //iterate over cheese array and access each element aka cheese
  //establish a base or null condition when food doesn't equal a cheese
  //else if food does equal/match a cheese return respective cheese

//Solution 1: O(n^2)
//you can have nested loops
//outer array is foods array; inner array is cheese array
//assumption: outer array is longer than inner array
//assumption: will finish looping through inner array faster
//assumption: everything is lowercase

// var cheeses = ['cheddar', 'gouda', 'camembert']; //establish cheeses
//   for (let i = 0; i < foods.length; i++) { //outter array - all the foods
//     for (let j = 0; j < cheeses.length; j++) { //inner array - only the cheeses
//       if (foods[i] === cheeses[j]) {
//         return cheeses[j]; //if cheese is found...return cheese
//       }
//     }
//   }
//   //once you have iterated through your outer array...and no cheese was found...
//   return "no cheese!" 
// }

//Solution 2: Faster solution than O(n^2) I believe

//Use indexOf method - returns -1 if no matching index is found between two arrays
//returns index of a matching value of one array from another
//we assume that our cheese array is smaller than foods array - just to make our comparisons more efficient
//Iterate over cheeses array to access each cheese
//we can now pass each cheese as a value to our indexOf method
//so we will call indexOf on foods with the cheese being the value passed to see if we find matching indexes
//store the matching index to a variable
//As soon as the matching index is found (if food index exists) aka NOT -1 then return the respective cheese
//return "no cheese" when all comparisons are made
var cheeses = ['cheddar', 'gouda', 'camembert'];
  for (let j = 0; j < cheeses.length; j++) {
    let foodIndex = foods.indexOf(cheeses[j]);
      if (foodIndex > -1) {
        return cheeses[j];
      }
  }
  return "no cheese!";
}
