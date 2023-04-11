// binarySearch(arr[5,9,17,23,25,45,59,63,71,89],0[l] ,9,59)
// {
//     if (r>=l){
//         mid =0 + (9-0)/2;
//         //if the element is present at the middle
//         //itself

//         if(arr[mid]==x)
//          return mid
         
//          //if the element is smaller than mid,then 
//          //it can only be present in the left subarray
//          if(arr[mid] > x)
//          return binarySearch(arr,l,mid-1,x)
            
//     }


// I've invited you to fill out a form:
// Merge and Binary Search
// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]


// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];
// function search(arr,target);
// leftIndex =0;
// rightindex = arr.length -1;

// while(leftIndex<=rightindex);
    
//     if(arr[middle] === target);
// function mergeSort(arr) {
//     if (arr.length<2) {
//         return arr;
//     }
//     let mid=arr.length/2;
//     let left=arr.slice(0,mid);
//     let right=arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right));
// }
// function merge(left,right) {
//     let sorted=[]
//     while (left.length && right.length) {
//         if (left[0]<=right[0]) {
//             sorted.push(left.shift())
//         }
//         else{
//             sorted.push(right.shift())
//         }
//     }
//     return[...sorted,...left,...right]
// }
// let arr=[45,12,6,89,2,5];
// console.log(mergeSort(arr));
// function binarySearch(array,target) {
//     let left=0;
//     let right=array.length-1;
//     while (left<=right) {
//         let mid=Math.floor((left+right)/2);
//         if (target===array[mid]) {
//             return mid;
//         }
//         else if (target < array[mid]) {
//             right=mid-1;
//         }
//         else{
//             left=mid +1
//         }
//     }
//     return null;
// }
// let arrs = mergeSort(arr);
// let target=6;
// console.log(binarySearch(arrs,target));

// function binarySearch(array,target) {

//     let left=0;
//     let right=array.length-1;
//     while (left<=right) {
//         let mid=Math.floor((left+right)/2);
//         if (target===array[mid]) {
//             return mid;
//         }
//         else if (target < array[mid]) {
//             right=mid-1;
//         }
//         else{
//             left=mid +1
//         }
//     }
//     return null;
// }
// let arrs = mergeSort(arr);
// let target=6;
// console.log(binarySearch(arrs,target));


//  let target2=59;
// function search1(arr2,target2){
//   let left=0;
//   let right=arr2.length -1;
//   while(left<=right){
//     let middle = Math.floor(arr2.length/2);
//     if(target2 === arr2[middle]){
//         return middle
//     }
//     else if(target2 < arr2[middle]){
//         left=middle+1
//     }
//     else{
//        right=middle -1
//     }

//     }
//      return null;
//   }
  
//  console.log(search1(arr2,target2))

// function binarySearch(arr2, target){
//     let leftindex= 0;
//     let rightindex =arr2.length-1;
//     console.log("left1",leftindex);
//     console.log("right1",rightindex);

//     while(leftindex<= rightindex){
//         console.log("left2",leftindex);
//         console.log("right2",rightindex);
//         let middle = Math.floor((leftindex+rightindex)/2);

//         if(arr2[middle]=== target){
//             return middle;
//         }
//         else if(arr2[middle]>target){
//             rightindex=middle-1

//         }
//         else{
//             leftindex=middle+1
//         }
//     }

// }
// let arr2 =[5,9,17,23,25,45,59,63,71,89];
// let target=59
// console.log(binarySearch(arr2, target));


// function workIt(arr3,target2){
//     let leftIndex =0;
//     let rightIndex=arr3.length-1;
//     while(leftIndex<=rightIndex){
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target2=== arr3[middle]){ 
//             return middle    
//     }
//     else if(target2< arr3[middle]){
//         (target< arr3[middle])
//     }
//     else{
//         rightIndex=middle-1
        
//     }


// }
// }
// let arr3=[4,5,15,27,48,69,40]
// let target2 = 48;
// console.log(binarySearch(arr3,target2))

// let arr4= [ 40,57,90,47,90,72,60,28];
// let target4 = 72
// function Searchit(arr4,target4){
//     let leftindex =0;
//     let rightindex=arr4.length-1;
//     while(leftindex<=rightindex){
//         let middle=Math.floor((leftindex+rightindex)/2);
//         if(target4 === arr4[middle]){
//             return middle;
//         }
//         else if(target4 >arr4[middle]){
//             leftindex=middle+1
//         }
//         else{
//             rightindex=middle-1

//         }
            
        
         
//     }
    

//     }
//     console.log(Searchit(arr4,target4))


//     let arr7 =[71,76,89,78,46,90,94,68];
//     let target7 = 71;
//     function BinarySearch(arr7,target7){
//         let leftside = 0;
//         let rightside = arr7.length-1;
//         while(leftside<=rightside){
//             let middle = Math.floor((leftside+rightside)/2);
//             if(target7===arr7[middle]){
//                 return middle
//             }
//             else if(target>arr7[middle]){
//                   leftside=middle+1
//         }
//         else{
//             rightside=middle-1

//         }
//     }
//     }
//     console.log(BinarySearch(arr7,target7))

// //remember in binary search that the array should be sorted
//     let arr9 = [2,6,13,21,36,47,63,81,97];
//     let target9 =21;
    
//     function searchFor(arr9,target9){
//         let leftDirection =0;
//         let rightDirection=arr9.length-1;
//         while(leftDirection <= rightDirection){
//             let mid = Math.floor((leftDirection+rightDirection)/2)
//             if(target9 === arr9[mid]){
//                   return middle
//             }
//             else if(target9<arr9[mid]){
//                 leftDirection=mid+1

//             }
//             else{
//                 rightDirection=mid-1
//             }
//         }
//     } 
//     console.log(searchFor(arr9,target9))

// let answers = [4,13,25,32,57,68,93];
// let touch1 =57;

// function lookFor(answers,touch1){
//     let left=0;
//     let right=answers.length-1;
//     while(left <= right){
//         let mid1 = Math.floor((left+right)/2)
//         if( touch1 === answers[mid1]){
//             return mid1
//         }
//         else if(touch1>answers[mid1]){
//             left=mid1+1
//         }
//         else{
//             right=mid1-1
//         }
           
//     }
     

// }
// console.log(lookFor(touch1,answers))


// let jibu1= [12,45,68,78,89];
// let target10 = 78;

// function binarySearch2(leftindex,rightindex){
//     while(leftindex<=rightindex){
//         let middle8=Math.floor((leftindex+rightindex)/2)
//         if(leftindex=== rightindex){
//             return middle8
//         }
//         else if(leftindex<=rightindex){
//             leftindex=middle8+1

//         }
//         else{
//               rightindex=middle8-1
//         }

//     }

// }

// console.log(binarySearch2(jibu1,target10))

// let arr56 = [34,57,68,78,82,90];
// let target= 78;

function Finding(arr,target){
    let leftRope=0;
    let rightRope=arr.length-1;

    while(leftRope<=rightRope){
        let middle = Math.floor((leftRope+rightRope)/2);
        if(target === arr[middle]){
            return middle
        }
        else if(target <= arr[middle]){
            leftRope=middle+1
        }
        else{
            rightRope=middle-1

        }
    }
}

let arr =[71,76,89,78,46,90,94,68];
let target = 78;
console.log(Finding(arr,target));


// let array = [31,35,36,58,68,79];


// function binarySearch(arr,target){
//     let left = 0;
//     let right=array.length-1;


//     while(left<=right){
//         let middle =Math.floor((left+right)/2);
//         if(target === arr[middle]){
//             return middle;
//         }
//         else if(target< arr[middle]){
//             left =middle + 1
//         }
//         else{
//             right=middle-1
//         }
//           }

// }
// let target =68;
// console.log(binarySearch(array,target))

// let custom =[21,45,67,89,91,112]

// function BinarySearch1(custom,target){
//     let left=0;
//     let right= custom.length-1;

//     while(left<=right){
//         let middle =Math.floor((left+right)/2)
//         if(target === custom[middle]){
//             return middle;
//         }
//         else if(target < custom[middle]){
//             left = middle+1
//         }
//         else{
//             right=middle-1
//         }

//     }
// }
// console.log(BinarySearch1())

// let start =[34,67,78,79,80];
// let target8=67;

// function binarySearch4(start,target8){
//     let left =0;
//     let  right= start .length-1;
//     while(left<=right){
//         let middle = Math.floor((left+right)/2)
//         if(target === start[middle]){
//             return middle

//         }
//         else if(target >start[middle]){
//             right = middle-1

//         }
            
//     }
//     return
   

// }































