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
Array.prototype.newForEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
     }
}

let retornoForEach = myArray1.forEach(callbackForEach);
let retornoNewForEach = myArray1.newForEach(callbackForEach);

// FILL

Array.prototype.newFill = function(valor, inicio=0, fim=this.length){
    for(let i = inicio; i < fim; i++){
        this[i] = valor;
    }
    return this;
}

let retornoFill = myArray1.fill('laranja');
let retornoNewFill = myArray7.newFill('laranja');

// MAP

const callbackMap = (element) =>{
    return element*2;
}
Array.prototype.newMap = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
       result.push(callback(this[i]));
    }
    return result;
}

let retornoMap = myArray2.map(callbackMap);
let retornoNewMap = myArray2.newMap(callbackMap);

// SOME

const callbackSome = (element, indice, array) =>{
    return element % 2 === 0;
}
Array.prototype.newSome = function(callback){
    for(let i = 0; i < this.length; i++){
        let result = callback(this[i], i, this);
        if(result === true){
            return true;
        }
    }
    return false;
}

let retornoSome = myArray3.some(callbackSome);
let retornoNewSome = myArray3.newSome(callbackSome);

// FIND

const callbackFind = (element, index, array) =>{
    return element===12;
}
Array.prototype.newFind = function(callback){
    for(let i = 0; i < this.length; i++){
        let result = callback(this[i], i, this);
        if(result === true){
            return this[i];
        }
    }
}

let retornoFind = myArray3.find(callbackFind);
let retornoNewFind = myArray3.newFind(callbackFind);

// FINDINDEX

const callbackFindIndex = (element, index, array) =>{
    return element === 19;
}
Array.prototype.newFindIndex = function(callback){
    for(let i = 0; i < this.length; i++){
        let result = callback(this[i], i, this)
        if(result === true){
            return i;
        }
    }
    return -1;
}

let retornoFindIndex = myArray3.findIndex(callbackFindIndex);
let retornoNewFindIndex = myArray3.newFindIndex(callbackFindIndex);

// EVERY

const callbackEvery = (element, indice, array) =>{
    return element % 2 === 0;
}
Array.prototype.newEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        let result = callback(this[i], i, this);
        if(result === false){
            return false;
        }
    }
    return true;
}

let retornoEvery = myArray4.every(callbackEvery);
let retornoNewEvery = myArray4.newEvery(callbackEvery);

// FILTER

const callbackFilter = (element, indice, array) =>{
    return element % 2 === 0;
}
Array.prototype.newFilter = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
       if(callback(this[i], i, this) === true){
           result.push(this[i]);
       };
    }
    return result;
}

let retornoFilter = myArray3.filter(callbackFilter);
let retornoNewFilter = myArray3.newFilter(callbackFilter);

// CONCAT

Array.prototype.newConcat = function(...valor){
    let result = [];
    result.push(...this)
    let arguments = [...valor]
    
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === 'number' || typeof arguments[i] === 'string'){
            result.push(arguments[i])
        }else{
            result.push(...arguments[i])
        }
    }

    return result;
}

let retornoConcat = myArray4.concat(myArray5,myArray7,9,'kenzinho');
let retornoNewConcat = myArray4.newConcat(myArray5,myArray7,9,'kenzinho');

// INCLUDES

Array.prototype.newIncludes = function(valor, fromIndex = 0){
    for(let i = fromIndex; i < this.length; i++){
        if(this[i] === valor){
            return true;
        }
    }
    return false;
}

let retornoIncludes = myArray3.includes(46);
let retornoNewIncludes = myArray3.newIncludes(46);

// INDEXOF

Array.prototype.newIndexOf = function(valor, fromIndex = 0){
    if(fromIndex >= this.length){
        return -1;
    }
    if(fromIndex < 0){
        for(let i = this.length-1; i >= 0; i--){
            if(this[i] === valor){
                return i;
            }
        }
        return -1;
    }
    for(let i = fromIndex; i < this.length; i++){
        if(this[i] === valor){
            return i;
        }
    }
    return -1;
}

let retornoIndexOf = myArray3.indexOf(19);
let retornoNewIndexOf = myArray3.newIndexOf(19);

// JOIN

Array.prototype.newJoin = function(str){
    let result = "";
    for(let i = 0; i < this.length-1; i++){
        result += this[i] + str;
    }
    result += this[this.length-1]
    return result;
}

let retornoJoin = myArray6.join(' ');
let retornoNewJoin = myArray6.newJoin(' ')

// REDUCE

const callbackReduce = (result,num, index, array) =>{
    return result + num
}
Array.prototype.newReduce = function(callback, inicial = 0){
    let result = inicial;
    for(let i = 0; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}

let retornoReduce = myArray3.reduce(callbackReduce);
let retornoNewReduce = myArray3.newReduce(callbackReduce);