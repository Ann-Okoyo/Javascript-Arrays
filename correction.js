let arr=[123,89,5,23,9,56]
function sort(arr){
    if(arr.length<=1){
        return arr;
    };
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right =arr.slice(middle);
    console.log({right})
    console.log({left})
    return sortedArray(sort(left),sort(right))
}
function sortedArray(left,right){
    let emptyArray =[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
     }  
    else{
        emptyArray.push(right.shift())
    }
}
return[...emptyArray,...left,...right]
}
console.log(sort(arr));

let array =[24,35,46,57,68,79,80,97];
let target=68;


function binarySearch(cat,dog){
    let cat=0;
    let dog=array.length-1;



    console.log(cat);
    console.log(dog);

    while(cat<=dog){
        let middle =Math.floor((cat+dog)/2);
        if(target === array[middle]){
            return middle;
        }
        else if(target < array[middle]){
            lefty=middle +1
        }
        else{
            righty=middle-1
        }

    }
}
console.log(binarySearch(array,target))

let array10 = [45,3,89,5,76,40,3,10];


   function sortOut(array10){
    if(array10.legth<=1){
        return array10;
    }
    let middle5 = Math.floor(array10.length/2);
    let left3 = array10.slice(0,middle5);
    let right3 = array10.slice(middle5);
    return merge4(sortOut(left3),sortOut(right3));

   }
   function merge4(left3,right3){
    let emptyArray =[];
    while(left3.length && right3.length){
        if(left3[0]<=right3){
            emptyArray.push(left3.shift());
        }
        else{
            emptyArray.push(righ3.push);
        }
        return[...emptyArray,...left3,...right3]
    }
   }
   console.log(sortOut(array10))
 
   let array7 = [34,23,12,6,7,4,90,35,14];

   function merging(array7){
    if(array7.length<=1){
        return array7;
    };
    let middle7 = Math.floor(array.length/2);
    let left7 =array7.slice(0,middle7);
    let right7 =array7.slice(middle7);
    return(merging2(merging(left7),merging(right7)));

   }
   function merging2(left7,right7){
    let emptyArray = [];
    while(left7.length && right7.length){
        if(left7[0]<=right7[0]){
            emptyArray.push(left7.shift());
        }
        else{
            emptyArray.push(right7.shift());
        }
        return[...emptyArray,...left7,...right7]
    }

   }
   console.log(merging(array7))

   let array12 = [4,6,7,12,14,23,34,35,90];
   let target12 = 23;

   function binarySearch(array12,target12){
    let left12=0;
    let right12=array12.length-1;

    while(left12<=right12){
    let middle12 =Math.floor((left12+right12)/2);
        if(target12 === array12[middle12]){
            return middle12
        }
        elseif(target12 < array12[middle12]);{
            left12 =middle12 +1
        }
        else{
            right12 =middle12-1

        }

        }

    }
    console.log(binarySearch(array12,target12))

    let array71 = [23,14,34,21,15,76,37,24];

    function Search (array17){
        if(array17.length<=1){
            return array17
        }
        let middle17 = Math.floor(array17.length/2);
        let left17 =array17.slice(0,middle17);
        let right17 = array17.slice(middle17);


    }
    function mergeSort17(left17,right17){
        let emptyArray=[];
        while(left17<=right17){
            if(left17[0]<=right17[0]){
                emptyArray.push(left17.shift());
            }
            else{
                emptyArray.push(right17.shift())
            }
            return[...emptyArray,...left17,...right17]
            
        }
    }
    console.log(Search(array17))
   
    let array6=[32,]






