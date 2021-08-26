// ARRAYS TESTS

let myArray1 = ['maçã', 'banana', 'uva'];
let myArray2 = [1,2,3,4,5];
let myArray3 = [3,5,7,8,12,11,19,46,32];
let myArray4 = [4,8,22,44,72];
let myArray5 = ['olá', 'mundo'];
let myArray6 = ['Aguardando','ansioso','o','Q2'];
let myArray7 = ['maçã', 'banana', 'uva'];

// FOREACH

const callbackForEach = (element, indice, array) =>{
    let result = `${element} - ${indice} - ${array}`;
    console.log(result)
    return result
}

function newForEach(array, callback){
    
    for(let i = 0; i < array.length; i++){
       callback(array[i], i, array);
    }
}

let retornoForEach = myArray1.forEach(callbackForEach)
let retornoNewForEach = newForEach(myArray1, callbackForEach)

// FILL

function newFill(array, valor, inicio=0, fim=array.length){
    for(let i = inicio; i < fim; i++){
        array[i] = valor;
    }
    return array;
}

let retornoFill = myArray1.fill('laranja');
let retornoNewFill = newFill(myArray7, 'laranja');

// MAP

const callbackMap = (element) =>{
    return element*2;
}

function newMap(array, callback){
    let result = [];
    for(let i = 0; i < array.length; i++){
       result.push(callback(array[i]));
    }
    return result;
}

let retornoMap = myArray2.map(callbackMap);
let retornoNewMap = newMap(myArray2, callbackMap);

// SOME

const callbackSome = (element, indice, array) =>{
    return element % 2 === 0;
}

function newSome(array, callback){
    for(let i = 0; i < array.length; i++){
        let result = callback(array[i], i, array);
        if(result === true){
            return true;
        }
    }
    return false;
}

let retornoSome = myArray3.some(callbackSome);
let retornoNewSome = newSome(myArray3, callbackSome);

// FIND

const callbackFind = (element, index, array) =>{
    return element===12;
}

function newFind(array, callback){
    for(let i = 0; i < array.length; i++){
        let result = callback(array[i], i, array);
        if(result === true){
            return array[i];
        }
    }
}

let retornoFind = myArray3.find(callbackFind);
let retornoNewFind = newFind(myArray3, callbackFind);

// FINDINDEX

const callbackFindIndex = (element, index, array) =>{
    return element === 19;
}

function newFindIndex(array, callback){
    for(let i = 0; i < array.length; i++){
        let result = callback(array[i], i, array)
        if(result === true){
            return i;
        }
    }
    return -1;
}

let retornoFindIndex = myArray3.findIndex(callbackFindIndex);
let retornoNewFindIndex = newFindIndex(myArray3, callbackFindIndex);

// EVERY

const callbackEvery = (element, indice, array) =>{
    return element % 2 === 0;
}

function newEvery(array, callback){
    for(let i = 0; i < array.length; i++){
        let result = callback(array[i], i, array);
        if(result === false){
            return false;
        }
    }
    return true;
}

let retornoEvery = myArray4.every(callbackEvery);
let retornoNewEvery = newEvery(myArray4, callbackEvery);

// FILTER

const callbackFilter = (element, indice, array) =>{
    return element % 2 === 0;
}

function newFilter(array, callback){
    let result = [];
    for(let i = 0; i < array.length; i++){
       if(callback(array[i], i, array) === true){
           result.push(array[i]);
       };
    }
    return result;
}

let retornoFilter = myArray3.filter(callbackFilter);
let retornoNewFilter = newFilter(myArray3, callbackFilter);

// CONCAT

function newConcat(array,...valor){
    let result = [];
    let arguments = [...valor]
    
    result.push(...array)
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === 'number' || typeof arguments[i] === 'string'){
            result.push(arguments[i])
        }else{
            result.push(...arguments[i])
        }
    }
    return result;
}

let retornoConcat = myArray4.concat(myArray5, myArray7, 9, 'kenzinho');
let retornoNewConcat = newConcat(myArray4, myArray5,myArray7,9, 'kenzinho');

// INCLUDES

function newIncludes(array, valor, fromIndex = 0){
    for(let i = fromIndex; i < array.length; i++){
        if(array[i] === valor){
            return true;
        }
    }
    return false;
}

let retornoIncludes = myArray3.includes(46);
let retornoNewIncludes = newIncludes(myArray3, 46);

// INDEXOF

function newIndexOf(array, valor, fromIndex = 0){
    
    if(fromIndex >= array.length){
        return -1;
    }
    
    if(fromIndex < 0){
        for(let i = array.length-1; i >= 0; i--){
            if(array[i] === valor){
                return i;
            }
        }
        return -1;
    }

    for(let i = fromIndex; i < array.length; i++){
        if(array[i] === valor){
            return i;
        }
    }
    return -1;
}

let retornoIndexOf = myArray3.indexOf(19);
let retornoNewIndexOf = newIndexOf(myArray3, 19);

// JOIN

function newJoin(array, str){
    let result = "";
    for(let i = 0; i < array.length-1; i++){
        result += array[i] + str;
    }

    result += array[array.length-1]
    return result;
}

let retornoJoin = myArray6.join(' ');
let retornoNewJoin = newJoin(myArray6, ' ')

// REDUCE

const callbackReduce = (result,num, index, array) =>{
    return result + num
}

function newReduce(array, callback, inicial = 0){
    let result = inicial;
    for(let i = 0; i < array.length; i++){
        result = callback(result, array[i], i, array)
    }
    return result
}

let retornoReduce = myArray3.reduce(callbackReduce);
let retornoNewReduce = newReduce(myArray3, callbackReduce);