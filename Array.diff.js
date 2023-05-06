function arrayDiff(a, b) {

    console.log(a.filter(a => !b.includes(a)))

    //     let elementB = b.shift()
    //     while (elementB != undefined) {
    //         for (let i=0; i<a.length; i++) {
    //             if (a.includes(elementB)) {
    //                 a.splice(a.indexOf(elementB), 1)
    //             }
    //         }
    //         elementB = b.shift();            
    //     }
    // console.log(a);
}
arrayDiff([1,2,2,2,3],[2]) // [1,3]
arrayDiff([1,2],[1]) // [2]
arrayDiff([], [1,2])
arrayDiff([1,2,3], [1,2]);





