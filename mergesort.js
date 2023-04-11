// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6

// function mergeSort(arr2){
//    if(arr2.length<=1){
//     return(arr2);
// };
// let middle =Math.floor(arr2.length/2);
// let left = arr2.slice(0,middle);
// let right = arr2.slice(middle);
// return sortedArray(mergeSort(left),mergeSort(right))
// }

// function sortedArray(left,right){
//     let emptyArray = [];
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             emptyArray.push(left.shift())

//         }
//         else{
//             emptyArray.push(right.shift())
//         }
       
//     }
//     return[...emptyArray,...left,...right]

// }
// let arr2 =[45,12,6,89,2,5]
// console.log(mergeSort(arr2))


// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
// function work(arr){
//     if(arr.length<=1){
//         return arr;
//     }
    
//     let middle = Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right =arr.slice(middle);
//     return sortArray(work(left),work(right));
// }
    


// function sortArray(left,right){
//        let emptyArray=[];
//     while(left.length&&right.length){
//         if(right[0]<left[0]){
//             emptyArray.push(right.shift())
//         }
//         else{
//             emptyArray.push(left.shift())
//         }
//         return[...emptyArray,...left,...right];

//     }
    
// }
//    let arr=[123,89,5,23,9,56]
//     console.log(work(arr));
// let arr3=[20,28,12,19,56,42,23]
//     function Sort(arr3){
//         if(arr3.length<=1){
//          return (arr3);
//     };

//     let middle = Math.floor(arr3.length/2);
//     let left = arr3.slice(0,middle);
//     let right = arr3.slice(middle);
//     return Arrange(Sort(left),Sort(right));
//     }
//  function Arrange(left,right){
//      let emptyArray =[];
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//            emptyArray.push(left.shift())
//     }
//     else{
//         emptyArray.push(right.shift())

//     }
//     return[...emptyArray,...left,...right]
//  }

//  }
///////binded together
//New Question
let arrayOfNumers = [23, 67, 12, 9, 1,6,101];
division(arrayOfNumers)
//Merge Sort
function division(arrayOfNumers) {
    if (arrayOfNumers.length<=1) {
        return arrayOfNumers;
    }
    let middle = Math.floor(arrayOfNumers.length/2);
    let left = arrayOfNumers.slice(0, middle);
    let right = arrayOfNumers.slice(middle);
    return msort(division(left), division(right))
}
function msort(left, right) {
    let emp = [];
    while (left.length && right.length) {
        if (left[0]<right[0]) {
            emp.push(left.shift());
        }
        else{
            emp.push(right.shift());
        }
    }
    return [...emp, ...left, ...right]
}
let numbers = division(arrayOfNumers)
console.log(numbers);
//Binary search
function binarysearch(arr, target){
    let left = 0;
    let right = arrayOfNumers.length-1;
    console.log({left});
    console.log({right});
    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if (arr[mid]===target) {
            return mid;
    }
        else if (arr[mid]< target) {
            left = mid+1;
    }
        else{
            right = mid-1;
        }
            }
        }
let target = 12;
console.log(binarysearch(numbers, target));

 
//  console.log(Sort(arr3))



let array = [40,70,50,36,30,32,20,16];
function  mergeSort(array){
    if(array.length<=1){
        return (array);
    }

let middle = Math.floor(array.length/2);
let left = array.slice(0,middle);
let right = array.slice(middle);
return Arrange(mergeSort(left),mergeSort(right));

};
function Arrange(left,right){
    let emptyArray =[];
  while(left.length && right.length){
    if(left[0]<right[0]){
        emptyArray.push(left.shift())
    }
    else{
      emptyArray.push(right.shift())
    }
  }
  return[...emptyArray,...left,...right]

}

console.log(mergeSort(array))



let array4 = [37,90,45,37,28,39,42,71,12];


function Sorting(array4){
    if(array4.length<=1){
        return(array4);
 };
 let middle1 = Math.floor(array4.length/2);
 let left1 = array4.slice(0,middle1);
 let right1 = array4.slice(middle1);
 return mergeSort1(Sorting(left1),Sorting(right1));

}
function mergeSort1(left1,right1){
  let emptyArray=[];
  while(left1.length && right1.length){
    if(left1[0]<right1[0]){
        emptyArray.push(left1.shift());
    }
    else {
        emptyArray.push(right1.shift());
    
  }

     return[...emptyArray,...left1,...right1]
  }
}
console.log(Sorting(array4))


let array7 =[12,78,57,90,47,35,9,];

function gather(array7){
    if(array7.length<=1){
        return array7;
    };
    let middle = Math.floor(array7.length/2);
    let left2 = array7.slice(0,middle);
    let right2 = array7.slice(middle);
    return(mergeSorting(gather(left2),gather(right2)));

}
   function mergeSorting(left2,right2){
    let emptyArray=[];
    while(left2.length && right2.length ){
        if(left2[0]<right2[0]){
            emptyArray.push(left2.shift());
        }
        else{
            emptyArray.push(right2.shift());
    }
     return [...emptyArray,...left2,...right2]
    

    }
   }
   console.log(gather(array7))


//binary search
function binarySearch(arr,target){

    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(target === arr[middle]){
            return middle
        }else if(target < arr[middle]){
            right=middle-1
        }
        else{
            right=middle+1
        }
        

    }
}
let target=12;
console.log(binarySearch(arr,target))


////////
