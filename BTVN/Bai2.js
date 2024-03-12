//Bai 2: tim phan tu lon thu 2 cua mang

const numbers = [2, -7, 9, 5, 2, 0, 5];

//cach 1: set va sort
const tmpArray = [...new Set(numbers)];

const resultArray = tmpArray.sort((a,b) => b - a);

console.log(resultArray[1]);

//Cach 2: dung reduce va sort
const arr = numbers.reduce((prev, value) => {
    if(!prev.includes(value)){
        prev.push(value);
    }
    return prev;
}, []);

const resultArr = arr.sort((a,b) => b - a);
console.log(resultArray[1]);

//cach 3: filter va sort
const Array = numbers.filter((value, index) => numbers.indexOf(value) === index);

const resArr = Array.sort((a, b) => b - a);

console.log(resArr[1]);

//cach 4: tim max va loc filter
const maxValue = Math.max(...numbers);

const secondValue = Math.max(...numbers.filter(value => value !== maxValue));

console.log(secondValue);