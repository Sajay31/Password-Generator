// taking elements from HTML and adding an event listener for when you click
document.getElementById("generate").addEventListener("click", genPass);
// defining genpass as a function and asking the user how long they want the password to be.
function genPass() {
  var len = prompt("How long do you want your password to be(8-128)?");

  // if input is lower than 8 or higher than 128, this text would be prompted.
  if (len < 8 || len > 128) return alert("Input does not meet criteria. Please try again.");

  var temp = '';
// list of criteria questions to the user for the password generator output.
  var low = confirm("Would you like lowercase letters in your password?");
  var upp = confirm("would you like uppercase letters in your password?");
  var num = confirm("Would you like numbers in your Password?");
  var spec = confirm("Would you like special characters in your password?");

  // list of charcters that can be outputted based on users response
  if (low) temp += 'abcdefghijklmnopqrstuvwxyz';
  if (upp) temp += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (num) temp += '1234567890';
  if (spec) temp += '!@#$%^&*()';

  var password = '';
// creating a for loop for the password to be randomly generated
  for (let i = 0; i < len; i++) {
    password+= temp[Math.floor(Math.random()*temp.length)]
  };

  // The output text for randomly generated password.
document.getElementById("password").innerText = password;
  console.log(temp)
}
