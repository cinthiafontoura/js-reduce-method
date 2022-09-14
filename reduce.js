  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr); // acc = accumulator and curr = currentValue
console.log (sum);

// simplified to real life use
const nums4 = [0, 1, 2, 3, 4];
let sum4 = nums4.reduce((acc, curr) => acc + curr, 7); // the second parameter goes afer coma
console.log (sum4);

// expanded exmple 1
const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => {
  console.log(
    'Accumulator:', acc,
    'Current Value:', curr,
    'Total:', acc + curr
  );
  return acc + curr;
});
console.log (sum2);

// expanded exmple 2
const nums3 = [0, 1, 2, 3, 4];
let sum3 = nums3.reduce((acc, curr) => {
  console.log(
    'Accumulator:', acc,
    'Current Value:', curr,
    'Total:', acc + curr
  );
  return acc + curr;
}, 6); // This second paramter is the inial value to start with, if chanched to 10 will start countinf from 10 and adding the values of the array
console.log (sum3);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
