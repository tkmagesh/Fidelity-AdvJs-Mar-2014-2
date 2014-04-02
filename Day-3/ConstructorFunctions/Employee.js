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