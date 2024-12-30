const nums = [10,20,30];

nums.splice(2,1);
console.log(nums);
nums.push(99);
console.log(nums);

// 11 a 


function getLastValue(array){
    const lastIndex = array.length - 1;
    const arrval = array[lastIndex];
    console.log(arrval);
}

getLastValue([1,20,22,24,'good boy']);
getLastValue([1,20,22,24,'good boy',2]);

// 11 b
function arraySwap(arr){
    let firstIndex = arr[0]; //1
    let lastIndex = arr[arr.length-1];  //5
    arr[0] = lastIndex;
    arr[arr.length-1] = firstIndex;
    console.log(arr);
}

arraySwap([11,20,22,24,5]);
arraySwap(['surya','good',22,24,'love']);

// 11c

for(let i = 0;i <= 10 ;i+=2){
    console.log(i,'hi');
}

// 11d

for(let i = 5; i >=0 ; i--){
    console.log(i,'bye');
}

// 11e

let i = 0;
while(i <= 10){
    console.log(i,'boy');
    i+=2
}


i = 5

while(i>=0){
    console.log(i,'stop');
    i--;
}

// 11f


const newarr =[1,2,3];

for(let i = 0 ; i < newarr.length ; i++){
    const update = newarr[i]+1;
    console.log(update,i,'11f');
}

//11g

function addone(array){

    for(let i = 0; i < array.length ; i++){
        const update = array[i]+1;
        console.log(update,i,'11h');
    }
}

addone([1,2,3]);
addone([-2,-1,0,99]);

//11h

function addNum(array,num){
    const input = array;
    for(i=0 ; i < array.length ;i++){
        let update = array[i] + num;
        console.log(update,'11i');
    }
}

addNum([1,2,3],2);
addNum([-2,-1,0,99],2);

//11i

function addArrays(array1,array2){
    for(let i=0 ; i < array1.length ; i++){
        const update = array1[i] + array2[i] ;
        console.log(update,` ${array1[i]} + ${array2[i]} 11j`);
    }
}

addArrays([1,2,2] , [1,1,3]);

//11j


function countpositive(nums){
    for(let i = 0 ; i < nums.length ; i++){
        let j = '';
        if(nums[i] > 0){
           j = j + 1; 
        } 
        console.log(j);
  }
}

countpositive([1,-3,5]);