
//let num = [45,12,6,89,2,5]
//let target = 6

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const leftIndex = mergeSort(arr.slice(0, middle));
  const rightIndex = mergeSort(arr.slice(middle));
  
  return merge(leftIndex, rightIndex);
}

function merge(leftIndex, rightIndex) {
  const result = [];
  let a = 0;
  let b = 0;
  
  while (a < leftIndex.length && b < rightIndex.length) {
    if (leftIndex[a] < rightIndex[b]) {
      result.push(leftIndex[a]);
      a++;
    } else {
      result.push(rightIndex[b]);
      b++;
}

  }
  return result.concat(leftIndex.slice(a)).concat(rightIndex.slice(b));
}


function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  
  while (leftIndex <= rightIndex) {
    const middle = Math.floor((leftIndex + rightIndex) / 2);
    
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      leftIndex = middle + 1;
    } else {
      rightIndex = middle - 1;
    }
  }
  
  return null;
}

const num = [45, 12, 6, 89, 2, 5];
const target = 6;

const sortedNum = mergeSort(num);
const targetIndex = binarySearch(sortedNum, target);

console.log(targetIndex);


function mergeSortDescending(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const leftIndex = arr.slice(0, middle);
  const rightIndex = arr.slice(middle);
  
  return mergeDescending(mergeSortDescending(leftIndex), mergeSortDescending(rightIndex));
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
  
  const middle = Math.floor(arr2.length / 2);
  const leftIndex = mergeSort(arr2.slice(0, mid));
  const rightIndex = mergeSort(arr2.slice(mid));
  
  return merge(leftIndex, rightIndex);
}

function merges(leftIndex, rightIndex) {
  const result = [];
  let e = 0;
  let f = 0;
  
  while (e < leftIndex.length && f < rightIndex.length) {
    if (leftIndex[e] < rightIndex[f]) {
      result.push(leftIndex[e]);
      e++;
    } else {
      result.push(rightIndex[f]);
      f++;
}

  }
  return result.concat(leftIndex.slice(e)).concat(rightIndex.slice(f));
}


function binarySearch(arr2, target) {
  let left = 0;
  let right = arr2.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr2[mid] === target) {
      return mid;
    } else if (arr2[mid] < target) {
      left = mid+ 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}
const sortedarr2 = mergeSort(arr2);
const TargetIndex = binarySearch(sortedarr2, target);

console.log(TargetIndex);





