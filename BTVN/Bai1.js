//Bai 1: xoa cac phan tu trung lap va sap xep lai theo chieu giam dan
const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];

//cach 1: su dung set de luu tru cac phan tu khong trung lap => dung sort de sap xep
const tmpArray = [...new Set(numbers)];

const resultArray = tmpArray.sort((a,b) => b - a);

console.log(resultArray);


//Cach 2: dung reduce va sort
//khoi tao mang prev rong, sau do kiem tra xem neu value chua co trong prev truoc do thi them vao prev
const arr = numbers.reduce((prev, value) => {
    if(!prev.includes(value)){
        prev.push(value);
    }
    return prev;
}, []);

const resultArr = arr.sort((a,b) => b - a);
console.log(resultArr);

//cach 3: filter va sort
//lay mang voi dieu kien vi tri xuat hien dau tien cua value chinh la index
const Array = numbers.filter((value, index) => numbers.indexOf(value) === index);

const resArr = Array.sort((a, b) => b - a);

console.log(resArr);

