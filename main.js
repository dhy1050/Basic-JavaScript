var a = 4;
var b = 6;
var s1 = "abcde";
var s2 = "fghijk"
console.log("this is the sum of number: "+a+b);
console.log("this is the sum of string: "+s1+s2);
var array1 = ["good","like","great","perfect"];
var array2 = ["bad","terrible","ugly","unluck"];
var combin = [array1,array2];
console.log(combin[0]);
console.log("the element of subarray: " +combin[0][1]);

function check(){
	var n = prompt("please enter a number!");
	if(n<10){
		return alert("the number is less than 10");
	}
	else{
		return alert("the number you type is "+n+" which is great than 10");
	}
}

check();

function checkS(){
	if(s1==="abcde"){
		alert("these two strings are same");
	}
	else{
		alert("they are two different strings");
	}
}

var k = prompt("do you want to check the strings, if yes please type 'y'. ");
if (k === 'y'){
	checkS();
}

function checkName(name){
	
	alert("the name you type is: "+name);
}

var name = prompt("plese type a name");

checkName(name);

function tosee(){

	console.log("Hello world!!");
}

tosee();