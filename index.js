const myInformation = require('./info.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello my name is ${myInformation.wilder} from the campus from ${myInformation.campus} and i'm learning ${myInformation.language}` ,
	e : "oO",
	T : "U "
}));