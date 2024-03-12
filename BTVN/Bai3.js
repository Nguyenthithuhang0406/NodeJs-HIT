//Bai 3: chuyen mang thanh doi tuong

const hit14 = ['H', 'I', 'T', 1, 4];

//cach 1: dung reduce
const object = hit14.reduce((prev, value, index) =>{
    prev[`key${index+1}`] = value;
    return prev;
}, {});

console.log(object);

//cach 2: forEach
const result = {};
hit14.forEach((value, index) => {
    result[`key${index + 1}`] = value;
});

console.log(result);