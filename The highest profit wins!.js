function minMax(arr){

   let newArr = [Math.min(...arr), Math.max(...arr)]
   return newArr;
   //console.log(newArr)


}
minMax([1,2,3,4,5]) // --> [1,5]
minMax([2334454,5]) // --> [5,2334454]
minMax([1]) //  --> [1,1])
 
           