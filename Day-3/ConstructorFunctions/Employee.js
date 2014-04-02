function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

/*
Modify the above constructor function as per below requirements:

1. "id" should be readonly
2. "name" cannot be assigned an empty string
3. "salary" cannot be assigned a new value less than the original

Clue:
	convert the attributes to "accessor" functions
*/

function Employee(id,name,salary){
	var _id = 0,
		_name = "",
		_salary = 0;

	this.id = function(){
		return _id;
	};

	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
		return _name;
	};

	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (val > _salary) _salary = val;
		return _salary;
	}
	_id = id;
    _name = name;
    _salary = salary;
    

}