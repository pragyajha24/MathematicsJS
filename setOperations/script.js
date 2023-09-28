// Set -  A set is a collection of items that are unique i.e. no element is repeated.

// Syntax:

let set1 = new Set(["potato", "potato", "tomato", "onion"]);

let set2 = new Set("foooooooodiee");

let set3 = new Set([10, 20, 30, 40, 40]);

let set4 = new Set();

// Set.size - It returns the number of elements in the Set.

// Set.add - It adds the new element with a specified value at the end of the set.
// Syntax: set1.add(val);

console.log(set1);
console.log(set2);
console.log(set3);
set3.add(50);
console.log(set3);
console.log(set4);

// Set.delete - It deletes an element with a specified value from the Set object.
// Syntax: set1.delete(val);
// Return value: true if the value is successfully deleted from the set else returns false.

console.log(set2.delete("e")); //deleting e from the set it returns TRUE
console.log(set2);
console.log(set2.delete("p")); // deleting an element which is not present in the set return FALSE

// Set.clear - It removes all the element from the set.
// Syntax: set1.clear()  [this methid take no parameter]

console.log(set2);
set2.clear();
console.log(set2);

// Set.entries - It returns an iterator object which contains an array having the entries of the set, in the insertion order. (key,value)
// Syntax: set1.entries();
// Return value: It returns an iterator object that contains an array of[value,value]
//               for every element of the set,in the insertion order .

let getEntriesArray = set3.entries(); // using entries to get iterator
console.log(getEntriesArray.next().value); // each iterator is array of [value, value]
console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);

// Set.has() - It returns true if the specified value is present in the Set object.
// Syntax: set1.has(val);
// Return value: True if the value is present else it returns false.

let set5 = new Set();

set5.add(60);
set5.add(70);
console.log(set5.has(60));
console.log(set5.has(10));

// Set.values() - It returns all the values from the Set in the same insertion order.
// Syntax: set1.values();
// Return value: An iterator object that contains all the values of the set in the same order as they are inserted.

// Set.keys() - It also returns all the values from the Set in the insertion order.
// Syntax: set1.keys();

set5.add(80).add(90).add(100);
let getValues = set5.values();
console.log(getValues);
let getKeys = set5.keys();
console.log(getKeys);

// Set.forEach() - It executes the given funxtion once for every element in the set, in the insertion order.
// Syntax: set1.forEach(callback[,argument]);
// Parameter:
//  callback - It is function that is to be executed for each elemet of the Set.
//      The callback function is provided with three parameters as follows:
//       -the element key
//       -the element value
//       -the Set object to be traversed
// thisargument - Value to be used as this when executing the callback.

// Set.prototype[@@iterator]() : It returns a Set iterator function which is values() function by default.
//  Syntax: set1[Symbol.iterator]();

let set6 = new Set(["sumit", "sumit", "amit", "anish"]);
let getit = set6[Symbol.iterator]();
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());

// SET OPERATIONS

// subSet() Method: It returns TRUE if Set A is a subset of Set B. A Set A is said to be a subset of Set B,if all the elements of Set A is also present in Set B.

Set.prototype.subSet = function (otherSet) {
  //if size of this set is greater
  //than otherSet then it can't be
  // a subset
  if (this.size > otherSet.size) return false;
  else {
    for (let element of this) {
      //if any of the element of
      //this is not present in the
      //otherSet then return false
      if (!otherSet.has(element)) return false;
    }
    return true;
  }
};

//using the subset function

//Declaring different sets
let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);

//print true
console.log(setA.subSet(setB));

//print false
console.log(setA.subSet(setC));

//print true
console.log(setC.subSet(setB));

// untion() Method:It returns a Set which consists of the union of Set A and Set B. A Set is said to be union of two sets,if it contains all elements of Set A as well as all elements of Set B,but it does not contain duplicate elements.
//                 If an element is present in both Set A and Set B then the union of Set A and B will contain a single copy of the element.

Set.prototype.union = function (otherSet) {
  //creating new set to store union
  let unionSet = new Set();

  //iterate over the values and add
  //it to unionSet
  for (let elem of this) {
    unionSet.add(elem);
  }

  //iterate over the values and add it to
  //the unionSet
  for (let element of otherSet) unionSet.add(element);

  //return the values of unionSet
  return unionSet;
};

//using the union function
//Declaring values for setD and setE
let setD = new Set([10, 20, 30, 40, 50]);
let setE = new Set([40, 50, 60, 70, 80]);

//performing union operation
//and storing the resultant set in
//unionSet
let unionSet = setD.union(setE);
console.log(unionSet.values());

// intersection() Method: It returns the intersection of Set A and Set B.A Set is said to be the intersection of Set A and Set B if contains an element which is present both in Set A and Set B.

Set.prototype.intersection = function (otherSet) {
  //creating new set to store intersection
  let intersectionSet = new Set();

  //iterate over the values
  for (let element of otherSet) {
    //if the other set contains a
    //similar value as of value[i]
    //then add it to intersectionSet
    if (this.has(element)) intersectionSet.add(element);
  }

  //return values of intersectionSet
  return intersectionSet;
};
//using intersection function
//Declaring values for setF and setG
let setF = new Set([10, 20, 30, 40, 50]);
let setG = new Set([40, 50, 60, 70, 80]);

//performing union operation
//and storing the resultant set in
//intersectionset
let intersectionSet = setF.intersection(setG);
console.log(intersectionSet.values());

// difference() Method:It returns the Set which contains the difference between Set A and Set B.A Set is said to be a difference between Set A and Set B if it contains se of elements e which are present in Set A but not in Set B.
Set.prototype.difference = function (otherSet) {
  //creating new set to store difference
  let differenceSet = new Set();

  //iterate over the values
  for (let element of this) {
    //if the values[i] is not present
    //in otherSet add to the differenceSet
    if (!otherSet.has(element)) differenceSet.add(element);
  }

  //returns values of differenceSet
  return differenceSet;
};

//using difference function
//Declaring values for setH and setI
let setH = new Set([10, 20, 30, 40, 50]);
let setI = new Set([40, 50, 60, 70, 80]);

//preforming union operation
//and storing the resultant set in
//intersectionset
let differenceSet = setH.difference(setI);
console.log(differenceSet.values());
