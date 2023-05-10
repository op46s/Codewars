function findEvenIndex(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let minusOne = false;

    let takeOutFirst = arr.slice(1, arr.length)
    let sumRest = takeOutFirst.reduce((a, b) => a+b) 

    console.log(sumRest);

    // for (let i = 0; i < arr.length; i++) {
    //     sumLeft += arr[i];
    //     sumRight = 0;
    //     for (let j = i + 2; j < arr.length; j++) {
    //         sumRight += arr[j]
    //     }

    //     if (sumLeft == sumRight) {
    //         console.log(i + 1);
    //         return;
    //     }     
    // }

    // if (sumRest === 0) {
    //     console.log(0);
    //     return;
    // } else {
    //     console.log(-1);
    //     return;
    // }
}
findEvenIndex([20,10,-80,10,10,15,35])