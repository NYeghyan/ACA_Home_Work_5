//////  Concat   Start  ////// 


const arrOne = [1,2,3,4,15,20]
const arrTwo =  ["a","b","c","d"]



function myConcat(arr1, arr2) {
    const nweArr = []
    for (let i = 0; i < arr1.length; i++) {
        nweArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        nweArr.push(arr2[i])
    }
    return nweArr
}

console.log(myConcat(arrOne,arrTwo))
console.log(arrOne.concat(arrTwo))



//////  Concat   End  ////// 




//////  Fill   Start  ////// 


//// Replase with this
let replaceWith = 6

//// Starting from index 
let stsrtFromIndex = 1

////  end on index  if you don't want to use this argument set it value to   0
let endAtIndex = 2

//console.log(arrOne.fill(6, 1, 2));   Example with fill

// fill with 'replaceWith' from position 'stsrtFromIndex' until position 'endAtIndex'
//fill with 'replaceWith' from position 'stsrtFromIndex' until  End if 'endAtIndex'  set to 0

function myFill(arr, replace, start, end ) {
    if(end > arr.length){
        end = arr.length
    }
    if(end){
        for(let i = start; i < end; i++){
            arr[i] = replace
        }
    } else {
        for(let i = start; i < arr.length; i++){
            arr[i] = replace
        }
    }
    return arr
}


console.log(myFill(arrOne,replaceWith,stsrtFromIndex,endAtIndex))



//////  Fill   End  ////// 





//////  Find   Start  ////// 

let compare = 16

function myFind (arr, compare){
    let neededValue = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > compare) {
            neededValue = arr[i]
            break
        }
    }
    return neededValue 
 
}


console.log(myFind(arrOne,compare))


//////  Find   End  ////// 






//////  findIndex   Start  ////// 

let compareFroFindIndex = 4

function myFindIndex(arr, compare){

    let indexOfneededValue = undefined
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === compare) {
            indexOfneededValue = i
        }
    }
    return indexOfneededValue 
}


console.log(myFindIndex(arrOne,compareFroFindIndex))


//////  Find   End  ////// 




//////  Flat Start  ////// 


const myArrayForFlat = [1,2,3,[6,5,7],8,9,[[11,12]],[13,14,15]]

function myFlat(arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            let count = arr[i].length
            for(let k = 0; k < count; k++){
                newArr.push(arr[i][k])
            }
        } else {
            newArr.push(arr[i])
        }
        
    }
    return newArr
}


console.log(myFlat(myArrayForFlat))



//////  Flat End  ////// 




//////  Map Start  ////// 

const myMapArr = [1,2,3,4,5,6]


function myMapFunction(arr){
    const myMapNewArr = []
    for(let i = 0; i < arr.length; i++ ) {
        myMapNewArr.push(arr[i] * 2)
    }
    return myMapNewArr
}

console.log(myMapFunction(myMapArr))

//////  Map End  ////// 




//////  Reduce Start  //////

const myReduceArr = [1,2,3,4,5,6,7,8]


function myReduceFunction(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        count += arr[i]
    }
    return count
}


console.log(myReduceFunction(myReduceArr))

//////  Reduce End  //////





////// Given an array. Determine whether it consists only of unique items or not. START

const givenArr = [1,2,3,4,4,4,5,6,6,6]
const givenArrTwo = [1,2,3,4,5,6,7,8,9]

function findMatch(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    if(newArr.length === arr.length) {
        return ("This array is consists only of unique items")
    }else {
        return ("This array is not consists only of unique items")
    }
}


console.log(findMatch(givenArr))
console.log(findMatch(givenArrTwo))


////// Given an array. Determine whether it consists only of unique items or not. END





/////////// Determine if a word or phrase is an isogram  START

let myString = "theoretically"
let myStringtwo = "word"



/////////////// Solution 1
let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);


console.log(isIsogram(myString))
console.log(isIsogram(myStringtwo))



/////////////// Solution 2

function findDublikate(string){
    const arr = string.toLowerCase().split("")
    const myNewArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!myNewArr.includes(arr[i])) {
            myNewArr.push(arr[i])
        }
    }
    if(myNewArr.length === arr.length) {
        return ("Input word  is isogram ")
    }else {
        return ("Input word  is not isogram ")
    }
}
console.log(findDublikate(myString))
console.log(findDublikate(myStringtwo))


/////////// Determine if a word or phrase is an isogram  END




///////////////////////////Lodash  Start




///// intersection Start


const myLodashArrOne = [3,1,2,1,4,5,6,6,33]
const myLodashArrTwo = [7,8,9,10,1,2,3,45,46,78,12,44,33,11,22,6]


function intersection(arrone,arrtwo) {
    const myNewArr = []
    for(let k = 0; k < arrone.length; k++) {
        for(let i = 0; i < arrtwo.length; i++){
            if( arrone[k] === arrtwo[i] ) {
                if(!myNewArr.includes(arrtwo[i]))
                    myNewArr.push(arrtwo[i])
                }
            }
        }
        return myNewArr
    }


console.log(intersection(myLodashArrOne,myLodashArrTwo))




console.log(_.intersection(myLodashArrOne,myLodashArrTwo))


///// intersection End


///// pull Start

const arrayPull = ['Apple', 'Apricot', 'Banana', 'Avocado','Mango','Plum'];
 
function myPull (array, ... strings) {

    for(let i = 0; i < array.length; i++) {
        for(let k = 0; k <= strings.length; k++) {
            if(strings[k] === array[i] ) {
                array.splice(i, 1)
            }
        }
    }
    return array
}
console.log(myPull(arrayPull,'Apple', 'Banana','Plum'))



_.pull(arrayPull, 'Apple', 'banana');
console.log(arrayPull);



///// pull End




///// Tail Start


const arrayTail = ['Lemon', 'Coconut', 'Peach', 'Blueberry'];
 

function myTail (arr) {
    const newTailArr = []
    for(let i = 1; i < arr.length; i++) {
        newTailArr.push(arr[i])
    }
    return newTailArr
}

console.log(myTail(arrayTail))


console.log(_.tail(arrayTail))






///// Tail End


///// Take Start


const arrayTake = ['Mango', 'Cherry', 'Pear', 'Orange'];


function myTake(arr, takeKount) {
    const myNewTakeArr = []
    if(takeKount === undefined){
        myNewTakeArr[0] = arr[0]
    }
    if(takeKount !== undefined) {
        for (let i = 0; i < takeKount; i++ ) {
            myNewTakeArr.push(arr[i])
        }
    }
    return myNewTakeArr
}

console.log(myTake(arrayTake,3))
console.log(myTake(arrayTake))



console.log(_.take(arrayTake, 3))
console.log(_.take(arrayTake))

///// Take End


///////////////////////////Lodash  Start