//Define ok users and passwords and organize into an array
// var user1 = {
// 	un: "un1",
// 	pw: "pw1",
// }

// var user2 = {
// 	un: "un2",
// 	pw: "pw2",
// }

// var user3 = {
// 	un: "un3",
// 	pw: "pw3",
// }

//var userArray = [user1, user2, user3];
// console.log(userArray)
// console.log(user1)
// console.log(userArray[0])
// var json = JSON.stringify(userArray)
// console.log(json)
// var undo = JSON.parse(json)
// console.log(undo)


// var newuser={
// 	un: "un4",
// 	pw: "pw3",
// }
// undo.push(newuser)
// console.log(undo)
var userArray = []
window.onload = function(){
	userArray.push(JSON.parse(sessionStorage.getItem("passingArray")))
 	console.log(userArray)
//  	console.log(JSON.stringify(userArray))
//  	console.log(sessionStorage.getItem("passingArray"))
 }

//When the enter button is clicked, call the fucntion to grab the id and pw entered
//and check user authentication
document.getElementById('enter').onclick = function (){authenticate()};

//Autheticate user function
function authenticate(){

	var un = document.getElementById('un').value;
	var pw = document.getElementById('pw').value;

//check the stored usernames and passwords against the known
//if there's a match let them in
//if you get to the end of the array of known users
//i will have incremented all the way to the array's length (less 1)
//this tells you there was no match and calls troubleshoot
//troubleshoot helps determine which fields to clear
//  Valid un and   valid pw -> clear both fields
//  Valid un and invalid pw -> clear pw only
//Invalid un and   valid pw -> clear both fields
//Invalid un and invalid pw -> clear both fields
	for(i=0; i<userArray.length; i++){
		if((un == userArray[i].un) && (pw == userArray[i].pw)){
			alert("You're in!");
			document.getElementById('un').value = "";
			document.getElementById('pw').value = "";
			break;
		}
		if(i==userArray.length-1){
			troubleshoot(un, pw);
		}
	}
};
//If there is a match in the known usernames clear only the pw field so user
//doesn't have to retype un
//If there is no match in the known usernames clear both un and pw fields
function troubleshoot(un, pw){
		for(j=0; j<userArray.length; j++){
			if(un == userArray[j].un){
				alert("Bad password");
				document.getElementById('pw').value = "";
				break;
			}
			if(j==userArray.length-1){
				alert("No match found. Please click the Create Account link to register a new username");
				document.getElementById('un').value = "";
				document.getElementById('pw').value = "";
			}
		}
};


