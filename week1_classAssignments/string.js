let originalWord = "madam"
let len = originalWord.length
let reverseWord = ""
//spliting into character
let splitCharacter = originalWord.split('')
console.log("the split word " +splitCharacter)
//For loop from end to start of the word
for(i=len; i>=0; i--){
reverseWord+=originalWord.charAt(i)
}
//switch statement to check condition
switch(true)
{  case reverseWord== originalWord:{
        console.log("The word is a palindrome")
        }break;
    case reverseWord!= originalWord:{
        console.log("The word is not a palindrome")} break;
    default: {console.log("Invalid word")}
}