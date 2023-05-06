function comp(a, b){
  
    if (b == null || a == null) {
      return false;
    }

    let sortedA = a.sort((a, b) => a-b).map(a => a*a)
    let sortedB = b.sort((a, b) => a-b)

    for (let i=0; i<sortedA.length; i++) {
        let sAs = sortedA[i];
        let sBs = sortedB[i];

        if (sAs != sBs) {
            return false;
        }
    }
    return true; 
}
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])