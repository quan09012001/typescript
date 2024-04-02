//*merging array with spread operator
var hobbies = ['Sports', 'Cooking'];
var activehobbies = ['Hiking'];
// activehobbies.push(hobbies);  // không thể thêm [] mảng vào mảng
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push.apply(activehobbies, hobbies);
console.log(activehobbies);
