//Write a function that takes in a string and returns it when reversed
// let food = 'eating'
function foods(food){
    return food.split("").reverse().join("")
}
console.log(foods("eating"))
//Write a function that takes in the following array and consoles the target if it is found else
// null
//  let nums = [2,8,0,23,5,45,76]
// //  Target = 23



function divideArry(nums){
    if(nums.length<=1){
        return nums
    }
    let middle = Math .floor(nums.length/2)
    let left=nums.slice(0, middle)
    let right =nums.slice(middle)
    return sortedArray(divideArry(left),divideArry(right))

}
function sortedArray(left,right){
    emptyArry =[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArry.push(left.shift())
        }
        else{
            emptyArry.push(right.shift())
        }
        
    }
    return[...emptyArry,...left,...right]
}
let nums =[2,8,0,23,5,45,76]

console.log(divideArry(nums))

function binary(numss,target){
 let left =0
 let right =numss.length-1
 while(left<=right){
    middle =Math.floor((left+right)/2)
    if(numss[middle]===target){
    return middle
 }
 else if(numss[middle]<target){
    left =middle+1
 }
else{
    right =middle -1
}
}
return null
}
let numss =[0,  2,  5, 8,23, 45, 76]
let target =23
console.log(binary(numss,target))

function p(j,target){
    for(let i=0;i<j.length-1;i++)
    if(j[i]===target){
        return target
    }
return null
}



//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
  function leaps(){
  for(let i=2000;i<=2023;i++){
   if(i%4==0 ){
    console.log(i + ' is a leap year');
   }
   else{

   console.log(i + ' is not a leap year');
}
}
  }
  leaps()
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for( let i=0;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("Fixxbuzz")
    }
    else if(i%3===0){
        console.log("Fizz")
    }
    else if(i%5===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.



let arr = [12,87,45,75,23,64,73]
let i =0;
let multiplication=1

function arrays(arr){    
     for(let i=0;i<arr.length;i++){
     arr[i]*=4
    }
     console.log(arr)
}

arrays(arr)


//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
// let change = ["10","24","45","56","67"]
 function changes(change){
    
     return change.join(",")
 }
     console.log(changes(["10","24","45","56","67"]))

     function arrayToStringAndBack (array) {

        // let string = array.join("");
    
        return array.join(",");
    
    }
    console.log(arrayToStringAndBack(["1", "2", "3", "4"]));
