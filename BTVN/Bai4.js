// Bai4: kiem tra xem mot doi tuong co chua tat ca cac key da cho khong

const club = {
    name: "HIT HaUI",
    age: 14,
    country: "VI"
};

const keysToCheck = ["name", "age", "country"];

// cach 1: sd hasOwnProperty
const check = keysToCheck.every((key) => club.hasOwnProperty(key));

console.log(check);

//cach 2: su dung Object.keys() de lay ra tat ca key cua club
const checkKeys = keysToCheck.every((key) => Object.keys(club).includes(key));

console.log(checkKeys);

//cach 3: reduce
const checks = keysToCheck.reduce((prev, key) => prev && club.hasOwnProperty(key), true);

console.log(checks);