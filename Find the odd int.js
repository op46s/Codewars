function findOdd(a) {

  let counter = 0;
  for (let i=0; i<a.length; i++) {

    let currentNum = a[i]

    for (let j=0; j<a.length; j++) {

      if (currentNum == a[j]) {
        counter++
      }
    }

    if (counter % 2 !== 0) {
      return currentNum
    }
  }
}
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]);
findOdd([0,1,0,1,0]);
//findOdd([1,1,2]);

