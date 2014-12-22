// counting

function countBs(string){
  bCount = 0
  for (i = 0; i < string.length; i++){
    if (string[i].toLowerCase() == 'b'){
      bCount++
    }
  }
  return bCount
}

function countChar(string, char){
  charCount = 0
  for (i = 0; i < string.length; i++){
    if (string[i].toLowerCase() == char){
      charCount++
    }
  }
  return charCount
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4