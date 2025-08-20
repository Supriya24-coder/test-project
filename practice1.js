// Day 1 (10.07.2025)

// Problem 4: Flatten a nested array [1, [2, 3], [4, [5, 6]]] outpu should be [1,2,3,4,5,6]

// const myArr = [1, [2, 3], [4, [5, 6]]];
// const arr = myArr.flat().flat();
// console.log(arr)


// Problem 1: Remove duplicates from an array [1, 2, 2, 3, 4, 4, 5]
// const myArr = [1, 2, 2, 3, 4, 4, 5];

// const uniqArr = myArr.filter((val,ind,arr)=>{
//     return ind!==arr.indexOf(val)
// })
// console.log(uniqArr);

// Problem 2: Reverse an array without modifying the original [1, 2, 3, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// const reverseArr = arr.map((v)=>v).reverse()
// console.log(reverseArr)
// console.log(arr);

// Problem 3: Filter objects based on multiple criteria people = [
//   { name: "Steve", age: 27, country: "America" },
//   { name: "Linda", age: 23, country: "Germany" },
//   { name: "Jimena", age: 29, country: "Spain" },
//   { name: "Eric", age: 24, country: "England" },
//   { name: "Jacob", age: 24, country: "America" },
// ];

const arr = [
  { name: "Steve", age: 27, country: "America" },
  { name: "Linda", age: 23, country: "Germany" },
  { name: "Jimena", age: 29, country: "Spain" },
  { name: "Eric", age: 24, country: "England" },
  { name: "Jacob", age: 24, country: "America" },
];

const a1 = arr.filter((v)=>{
    return v.age>=29
});

// console.log(a1);


function searchName(nm){
    return arr.filter((v)=>{
        return v.country===nm
    })
    
}

// console.log(searchName("Spain"))


function filterArr(array,condition){
    
    return array.filter((item)=>{
        return Object.entries(condition).every(([key, value])=>item[key]===value)
    })
}

// console.log(filterArr(arr,{name:"Eric"}));
// console.log(Object.entries({name:"Eric"}));



// Problem 5: Group anagrams ["eat", "tea", "tan", "ate", "nat", "bat"]; ouput should be  [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ] 

// const arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];


// function findAnagrams(arr){
//     const map = new Map();

//     for(const elems of arr){
//         const sortedElem = elems.split("").sort().join(" ")
//         if(!map.has(sortedElem)){
//             map.set(sortedElem,[])
//         }
//         map.get(sortedElem).push(elems)
//     }
//     return Array.from(map.values())
// }

// const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(findAnagrams(input));


// Third Largest Element of Array
// const myArr = [12,54,87,25,65,12,54];

// console.log(myArr[myArr.sort((a,b)=>a-b).length-3]);

// Given an array arr[], return the element that appears more than n / 2 times, where n is the array size. If no such element exists, return -1.
// Examples:
// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1

const arr3 = [1, 1, 2, 1, 3, 5, 1,3,3,3,3,3,3,3,3];
function countArr(arr){
    const count = {};
    const elems  = Math.floor(arr3.length/2)
    for(let num of arr){
        count[num] = (count[num]||0) +1
        console.log(count)
        if(count[num]>elems){
            return num
        }
    }
    return -1
}
console.log(countArr(arr3));