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
const gg = [1,2,3,4,5,6,7,8,9]

function findMatch(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
        if(newArr.length === arr.length) {
            return false
        }
    }
    return true
}


console.log(findMatch(givenArr))
console.log(findMatch(gg))



////// Given an array. Determine whether it consists only of unique items or not. END



let myString = "annasun"


