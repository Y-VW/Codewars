// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it 's invalid.
// Constraints: 0 <= input.length <= 100

function validParentheses(parens){
  if (parens.length <= 0 || parens.length > 100) return false
  let array = []
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
            array.push(parens[i])
        }
     else if (parens[i] === ')') {
       if (array.length === 0){
       array.push(parens[i])
       }
       else {
         let last = array.pop();
        }
    }
  }
   if (array.length === 0) {return true}
   else {return false}
}
