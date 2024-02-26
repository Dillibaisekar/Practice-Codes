let string = "Detartrated";
let rstring=string.toLowerCase();

function reverseAString(str)
{
    return str.split('').reverse().join('')
}
function palindrome()
{
    if (rstring==reversedString)
    {
        console.log(rstring+' is a palindrome');
    }
    else{
        console.log(rstring+' is not a palindrome');
    } 
}
const reversedString=reverseAString(rstring)
console.log(reversedString)
palindrome()


