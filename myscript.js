var fName = prompt("Please enter your First Name: ");
var lName = prompt("Enter your Last Name: ");
var yOld = prompt(" Enter your Old: ");
var tall = prompt("Enter your tall: ");
var petName = prompt("Enter your Pet:  ");

if(fName[0]==lName[0]){
  if (yOld>20&& yOld<30) {
    if (tall>=170) {
      if (petName[petName.length-1]=="y") {
        console.log("This is the Spy");
      }
    }
  }
}
else{
  console.log("Nothing find");
}
