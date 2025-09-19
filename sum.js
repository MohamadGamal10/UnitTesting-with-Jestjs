// function sum(num1, num2, num3){
//     return (num1 || 0) + (num2 || null) + (num3 || null);
// }
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

module.exports = sum;
