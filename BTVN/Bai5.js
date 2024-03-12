//Bai 5: kiem tra 1 doi tuong co rong khong

const cat = {
    name: "meow",
    age: 2
};

//cach 1: Object.keys()
//lay ra mang key cua doi tuong r kiem tra do dai
const check = Object.keys(cat).length === 0;

console.log(check);   //check === false la khong rong, check ===  true la rong

//cach 2: getOwnPropertyNames()
//lay ra mot mang cac thuoc tinh cua doi tuong r kiem tra do dai
const Check = Object.getOwnPropertyNames(cat).length === 0;
console.log(Check);

//cach 3: su dung Object.entries()
//lay ra mang cap key-value cua doi tuong r tinh do dai
const IsEmpty = Object.entries(cat).length === 0;
console.log(IsEmpty);