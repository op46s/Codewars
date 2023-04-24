function sumTwoSmallestNumbers(numbers) {  

    let sumOfFirstTwo = numbers.sort((a, b) => a-b).slice(0, 2).reduce((a, b) => a+b)
    console.log(sumOfFirstTwo);
}
sumTwoSmallestNumbers([19, 5, 42, 2, 77]);
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])