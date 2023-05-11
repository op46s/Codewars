function disemvowel(str) {
  
    let vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'O', 'I', 'U'];
    let strToArr = str.split('')
    let newString = ''

    for (let i=0; i<strToArr.length; i++) {
       let currentLetter = strToArr[i];
        if (!vowels.includes(currentLetter)) {
            newString+=currentLetter
        }
    }
    console.log(newString);
}
disemvowel("This website is for losers LOL!");
disemvowel("No offense but,\nYour writing is among the worst I've ever read");
disemvowel("What are you, a communist?");