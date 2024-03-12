// // //let, var, const
// // //arrow function


// // //class
// // class Person{
// //     constructor(fullname, age){
// //         this.fullname = fullname;
// //         this.age = age;
// //         //this la gi va lj trong nay
// //     }
// //     getInfo(){
// //         console.log(this.fullname, this.age);
// //     }
// // }

// // const newPerson = new Person("nfkhei", 19);
// // newPerson.getInfo();

// // class Student extends Person{
// //     constructor(fullname, age, point){
// //         this.point = point;
// //     }

// //     getInfoStudent(){
// //         console.log(this.fullname, this.age, this.point);
// //     }
// // }
// // const newStudent = new Student("kfkeq", 19, 9);
// // newStudent.getInfoStudent();

// //2 kieu exports
 
// //array method
// //so sanh forEach va map
// const myArray = [1,2,3,5];

// myArray.forEach((item) => {
//     console.log(item);
// });

// const newArray = myArray.map((item) => item ** 2); //binh phuong
// console.log(newArray);

// const array2 = myArray.filter((item) => item >= 3);
// console.log(array2);

// const result = myArray.reduce((item1, item2) => item1 + item2); //tra ve 1 kq duy nhat
// console.log(result);

// //find: tra ve kq dau tien thoa man
// const res = myArray.find((item) => item > 3);
// console.log(res);

// //some, every => true/false
// const bl1 = myArray.some((item) => item % 2 === 0);
// console.log(bl1);

// const bl2 = myArray.every((item) => item % 2 === 0);
// console.log(bl2);


const Person = {
    fullname: "kljfskgu",
    age: 19,
    test:{
        data: "Test",
    },
};

console.log(Person.hasOwnProperty("age")); //kiem tra xem co ton tai thuoc tinh age khong

console.log(Object.values(Person)); //tra ve 1 mang cac gia tri cua obj

console.log(Object.keys(Person)); 

//su khac biet giua 3 cach clone sau
const person2 = Object.assign({}, Person); //clone cap 1
console.log(person2);

const person3 = {...Person}; //clone cap 1
console.log(person3);

const person4 = JSON.parse(JSON.stringify(Person)); //clone da cap
console.log(person4);