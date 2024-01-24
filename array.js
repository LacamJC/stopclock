// const avaregeTemp = [];
// avaregeTemp[0] = 31.9;
// avaregeTemp[1] = 35.3;
// avaregeTemp[2] = 42.4;
// avaregeTemp[3] = 52;
// avaregeTemp[4] = 60.8;

// console.log(avaregeTemp)

// let daysOfWeek = new Array();
// daysOfWeek = new Array(7);
// daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

/// Or

// let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// console.log(daysOfWeek)

//  FIBONACCI

// const fibonnaci = [1,1];


// for(i=2; i  < 20;i++)
// {
//     fibonnaci[i] = fibonnaci[i-1] + fibonnaci[i-2];

// }


// for(i=1; i < fibonnaci.length;i++)
// {
//     console.log(fibonnaci[i])
// }


// let numbers = [0,1,2,3,4,5,6,7,8]

// numbers.push(9,10,11,12,13,14,15,16)


// Array.prototype.insertFirstPosition = function(value){
//     for(let i = this.length; i >= 0; i--)
//     {
//         this[i] = this[i-1];
//     }
//     this[0] = value;
// };

// numbers.insertFirstPosition(-1);

// numbers.unshift(-1);
// for(i=1; i < 6;i++)
// {
//     numbers.unshift(i-(i*2))
// }


// for(let i = 0; i < numbers.length; i++)
// {
//     numbers[i] = numbers[i+1];
// }

// Funções de remoção do primeiro item do array

// Array.prototype.reIndex = function(myArray){
//     const newArray = [];

//     for(let i = 0; i < myArray.length; i++)
//     {
//         if(myArray[i] !== undefined)
//         {
//             newArray.push(myArray[i]);
//         }
//     }

//     return newArray;
// }

// Array.prototype.removeFirstPosition = function(){
//     for(let i =0; i < this.length; i++)
//     {
//         this[i]=this[i+1];
//     };
//     return this.reIndex(this);
// };


// console.log(numbers)

// numbers = numbers.removeFirstPosition();


// console.log(numbers)


// Metodo shift é melhor ;c
// console.log(numbers)
// numbers.shift()
// console.log(numbers)


// Arrays Bidimensionais e Multidimensionais 

// let avaregeTemp = [];
// avaregeTemp[0] = [72,75,79,79,87,81];
// avaregeTemp[1] = [81,79,75,75,73,73];


// function printMatrix(myMatrix)
// {
//     for(let i = 0; i < myMatrix.length; i++)
//     {
//         for(let j = 0; j < myMatrix[i].length; j++)
//         {
//             console.log(myMatrix[i][j])
//         }
//     }
// }


// const matrix3x3x3 = [];

// for(let i = 0; i < 3; i++)
// {
//     matrix3x3x3[i] = [];
//     for(let j = 0; j < 3; j++)
//     {
//         matrix3x3x3[i][j] = [];
//         for(let z = 0; z < 3; z++)
//         {
//             matrix3x3x3[i][j][z] = i + j + z;
//         }
//     }
// }

// for(let i = 0; i < matrix3x3x3.length; i++)
// {
//     for(let j = 0; j < matrix3x3x3[i].length; j++)
//     {
//         for(let z = 0; z < matrix3x3x3[i][j].length; z++)
//         {
//             console.log(matrix3x3x3[i][j][z])
//         }
//     }
// }


// const zero = 0;
// const positiveNumbers = [1,2,3,4,5];
// const negativeNumbers = [-5,-4,-3,-2,-1];

// let numbers = negativeNumbers.concat(zero,positiveNumbers);

// console.log(numbers)


// function isEven(x){
//     // console.log(x);
//     return x % 2 === 0 ? true: false;
// }
// OR

// console.log(isEven(2));


// for(i=0; i < numbers.length; i++)
// {
//     // console.log(isEven(numbers[i]));
//     if(isEven(numbers[i]) === true)
//     {
//         console.log(numbers[i], isEven(numbers[i]))
//     }

// }

const isEven = x => x % 2 === 0;
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// numbers = [2,4,6,8,10];
// console.log(numbers.some(isEven));


// numbers.forEach(x => console.log(x % 2 === 0)); // Executa todos os indices do array ate o fim executando um parametro especifico

const myMap = numbers.map(isEven);
const evenNumbers = numbers.filter(isEven)
// console.log(myMap)
// console.log(numbers)
// console.log(evenNumbers)

// console.log(numbers.reduce((previous, current) => previous + current))

// console.log(numbers.findIndex(2))

// for (const n of numbers) {
//     console.log(numbers[n],(n % 2 === 0 ? 'Even' : 'Odd'))
// }


let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

iterator = numbers[Symbol.iterator]();
for(const n of iterator)
{
    console.log(n)
}














