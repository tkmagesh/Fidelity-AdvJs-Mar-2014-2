function sum(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return sum.apply(this,n);
		if (isNaN(n)) return 0;
		return parseInt(n);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + sum([].splice.call(arguments,1));
}
/*
"this" context
1. One way by which the "this" context of a function can be changed is by assigning the functin as a method of the target object
2. 
*/

	/*var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;*/
