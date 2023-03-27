// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var passwordLength= window.prompt("How many characters would you like your password to contain (choose between 8 to 128 characters)");

  if (!passwordLength) {return;}
  if (passwordLength<=7) {alert("Length must be at least 8 characters. Try Generate Password button again"); return;}
  if (passwordLength>=128) {alert("Length must be maxium of 128 characters. Try Generate Password button again"); return;}

  //var Lcase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //var Ucase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  //var Symbols=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
  //var Numbers=["0","1","2","3","4","5","6","7","8","9"];
  //Submitting each "list" as a string variable instead of an array is better when using the substring command. If we don´t do this comas will repeat more than one time in the availables characters. 
  var Lcase="abcdefghijklmnopqrstuvwxyz";
  var Ucase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Symbols= ",!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var Numbers="10123456789"
  var AvailableChar="";
  var password="";

  var LcaseConfirmation=confirm("Would you like lowercases in your password?");

  var UcaseConfirmation=confirm("Would you like uppercases in your password?");
 
  var SymbolsConfirmation=confirm("Would you like symbols/special characters in your password?");

  var NumbersConfirmation=confirm("Would you like numbers in your password?");

  if (LcaseConfirmation==true) {AvailableChar=AvailableChar.concat(Lcase);}
  if (UcaseConfirmation==true) {AvailableChar=AvailableChar.concat(Ucase);}
  if (SymbolsConfirmation==true) {AvailableChar=AvailableChar.concat(Symbols);}
  if (NumbersConfirmation==true) {AvailableChar=AvailableChar.concat(Numbers);}

//console.log(passwordLength);  console.log(LcaseConfirmation);  console.log(UcaseConfirmation);  console.log(SymbolsConfirmation); console.log(NumbersConfirmation); Comment to check true or false condition working. 
// console.log(AvailableChar); Comment to check if concat is working

for (let i = 1; i <= passwordLength; i++) { //Loop for adding a random character of the availables depending on the length introduce by user.
  var index = Math.floor(Math.random() * AvailableChar.length);
  password += AvailableChar.substring(index, index +1);//adds one character where substrin() takes a SINGLE character from our aveilables characters list that in this case is a string.
 }
return password;
}
