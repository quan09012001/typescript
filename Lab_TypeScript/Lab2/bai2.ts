// enum Role { ADMIN, READ_ONLY, AUTHOR };
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: Role,
//     roletuple: [number, string]
// } = {
//     name: 'Typescript',
//     age: 11,
//     hobbies: ['Sport', 'Cooking'],
//     role: Role.ADMIN,
//     roletuple: [2, 'author']
// }

// var favouriteActivites: any[];
// favouriteActivites = [5, 'Sports', true];

// if (person.role === Role.AUTHOR) {
//     console.log('is author');
// }

// person.roletuple.push('admin');
// person.roletuple[1] = '10';
// person.roletuple = [0, 'admin'];

// // ---------------------------------------------


// type Combinable = number | string;
// function combine(input1: Combinable, input2: number | string, resultConvesion: 'as-number' | 'as-text') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvesion === 'as-number') {
//         result = +input1 + +input2; // +biến -> chuyển string thành number
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// const combineNumber = combine(30, 26, 'as-number');
// console.log(combineNumber);

// const combineStringNumber = combine('30', '26', 'as-number');
// console.log(combineStringNumber);

// const combineText = combine('Typescript Vs ', 'Javascript', 'as-text');
// console.log(combineText);

// // ---------------------------------------------

// var a = null;
// console.log(a);
// console.log(typeof(a));

// var b, undeclareVar;
// console.log(b);
// console.log(typeof(a));
// // console.log(undeclareVar); // biến chưa được gọi

// // ---------------------------------------------

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript';
// userName = userInput; // biến có kiểu dữ liệu uknown không thể gán cho biến có kiểu dữ liệu khác
userName = <string> userInput;
if(typeof userInput==='string'){
    userName = userInput;
}