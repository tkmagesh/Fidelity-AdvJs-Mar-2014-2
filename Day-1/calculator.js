function sum(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (isNaN(n)) return 0;
		return parseInt(n);
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}