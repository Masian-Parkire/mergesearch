//Given an array of unsorted numbers, 
//return the index of the following target if the target exists in the array.
//If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
}

  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
    
  
  

  
  return null;
}

const num = [45, 12, 6, 89, 2, 5];
const target = 6;

const sortedNum = mergeSort(num);
const targetIndex = binarySearch(sortedNum, target);

console.log(targetIndex);


//Given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]
// function mergeSort(array2){
//   if (array2.length <= 1){
//       return array2;
//   }
//   let middle = Math.floor(array2.length / 2);
//   let left = array2.slice(0,middle);
//   let right = array2.slice(middle);
//   return merge(mergeSort(left), mergeSort(right));
// }
// function merge( left, right){
//   let result = [];
//   while (left.length && right.length){
//       if(left[0] >= right[0]){
//           result.push(left.shift());
//       }else{
//           result.push(right.shift());
//       }
//   }
//   return[...result, ...left, ...right];
// }
// let array2 = [123, 89, 5, 23, 9, 56];
// array2 = mergeSort(array2);
// console.log(array2);

function mergeSortDescending(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return mergeDescending(mergeSortDescending(left), mergeSortDescending(right));
}

function mergeDescending(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] >= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arr = [123, 89, 5, 23, 9, 56];
let sortedArr = mergeSortDescending(arr);
console.log(sortedArr);






//Given the following array, search for the following target
let   Target = 34
let arr2 = [1,4,78,2,67,3];

function mergesSort(arr2) {
  if (arr2.length <= 1) {
    return arr2;
  }
  
  const mid = Math.floor(arr2.length / 2);
  const left = mergeSort(arr2.slice(0, mid));
  const right = mergeSort(arr2.slice(mid));
  
  return merge(left, right);
}

function merges(left, right) {
  const result = [];
  let e = 0;
  let f = 0;
  
  while (e < left.length && f < right.length) {
    if (left[e] < right[f]) {
      result.push(left[e]);
      e++;
    } else {
      result.push(right[f]);
      f++;
}

  }
  return result.concat(left.slice(e)).concat(right.slice(f));
}


function binarySearch(arr2, target) {
  let left = 0;
  let right = arr2.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr2[mid] === target) {
      return mid;
    } else if (arr2[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
    
  
  

  
  return null;
}



const sortedarr2 = mergeSort(arr2);
const TargetIndex = binarySearch(sortedarr2, target);

console.log(TargetIndex);





