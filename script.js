function makeid(l) {
  // write your code here
	let ans = "";
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0;i<l;i++){
		let randomIndex= Math.floor(Math.random()*characters.length);
		ans+= characters[randomIndex];
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number."); 
alert(makeid(l));
