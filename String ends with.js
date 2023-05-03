function solution(str, ending){

    let newStr = str.split('').reverse().join('').slice(0, ending.length);
    let newEnding = ending.split('').reverse().join('');

    if (newStr === newEnding) {
        return true;
    } else {
        return false;
    }
}
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

