//*merging array with spread operator

const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking'];
// activehobbies.push(hobbies);  // không thể thêm [] mảng vào mảng
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);