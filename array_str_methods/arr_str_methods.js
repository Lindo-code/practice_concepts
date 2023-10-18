//ARRAYS
// Lindo: slice, filter, reduce (map)
// Hlobile: indexOf, join
// Miah: indexOf, splice, forEach
// Mdu: includes

// const arr = ["apple", "beef", "soup", "bread"];

// //return an array with nums 0 and so forth: const arr = ["apple0", "beef1", "soup2", "bread3"];

// MAP
const newArr = arr.map((element, idx) => {
    //food + num
    // console.log(element, idx,arr)
    return element + idx
})

const nums = [1,2,3,4,"0"];
const arr = ["apple", "beef", "soup", "bread"];

// REDUCE
const sum = nums.reduce((prev, curr) => {
    return Number(prev) + Number(curr)
})

// FILTER
const onlyNums = nums.filter((item) => typeof item === "number");

// SPLICE
arr.splice(2, 0, "eggs", "pepper", "salt");

// SLICE
const newArr = arr.slice(-2);

// CONCAT
const combinedArr = nums.concat("meat", "socks", "ice-cream");

// EVERY
console.log(nums.every((item)=> typeof item === "string"))

// FIND
console.log(combinedArr.find((item) => item === ""))

// LINK TO SHORT CLIPS OF MANY ARRAY METHODS: https://youtube.com/playlist?list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2&si=0mNuJVRbMmnKF7mR
