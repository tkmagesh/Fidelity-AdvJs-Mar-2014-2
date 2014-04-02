var baseObj = {
	display : function(){
		console.log(this.id,this.name,this.salary);
	}
};

function Employee(id, name, salary){
	this.id =id;
	this.name = name;
	this.salary = salary;
}

Employee.prototype = baseObj;

var e1 = new Employee(101, "Magesh", 10000);
e1.display();