//Define ok users and passwords and organize into an array
// var user1 = {
// 	un: "un1",
// 	pw: "pw1",
// }

// var user2 = {
// 	un: "un2",
// 	pw: "pw2",
// }

// var user = {
//  	un: "un",
//  	pw: "pw",
//  }

// var array = [];
// console.log(array)
// var item = {
// 	prop1: "1",
// 	prop2: "2",
// }
// console.log(item)
// array.push(item)
// console.log(array)



 var userArray = [];
// console.log(userArray)

window.onload = function(){
  	userArray.push(JSON.parse(sessionStorage.getItem("passingArray")))
  	console.log(userArray)
}

document.getElementById('enternew').onclick = function(){verifyNew()};
//Verify new user function
function verifyNew(){

	var un = document.getElementById('unnew').value;

	//check the new usernames against the known
	//if there's a match kick them back
	//if you get to the end of the array of known users
	//i will have incremented all the way to the array's length
	//this tells you there was no match and calls verifySecure
	//to ensure their password is long enough
	if(userArray[0]!=null){
		for(i=0; i<userArray.length; i++){
			if(un == userArray[i].un){
				alert("Username exists, please create a new username");
				document.getElementById('unnew').value = "";
				break;
			}
		}
		if(i==userArray.length){
			verifySecure();
		}
	}else{
		verifySecure();
	}
};

function verifySecure(){

	var pw = document.getElementById('pwnew').value;

	//check that the password entered is 8 characters or more
	if(pw.length>=8){
		addUser()
	}else{
		alert("Please enter a password of 8 characters or more")
		document.getElementById('pwnew').value = "";
	}
	
};

function addUser(){
	
	var newUser = {
		un: document.getElementById('unnew').value,
		pw: document.getElementById('pwnew').value,
	}
	userArray.push(newUser)

 	console.log(userArray)
	sessionStorage.setItem("passingArray", userArray)
	document.getElementById('unnew').value = "";
	document.getElementById('pwnew').value = "";

	alert("Your username and password have been successfully added! Please click the Return to Login link to log in")
}
	


