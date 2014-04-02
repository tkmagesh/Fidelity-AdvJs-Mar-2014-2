	function SalaryCalculatorModel(){
		var _basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0,
			_salary = 0;

		this.subscribers = {};

		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			this.triggerChange("basic");
		};
		this.hra = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			this.triggerChange("hra");
		};
		this.da = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			this.triggerChange("da");
		};
		this.tax = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			this.triggerChange("tax");
		};

		this.salary = function(val){
			if (typeof val === "undefined") return _salary;
			_salary = val;
			this.triggerChange("salary");
		};
		
		/*this.hra =0;
		this.da = 0;
		this.tax = 0;
		this.subscribers = {};

		this.onSalaryChange = function(){};*/
	}

	SalaryCalculatorModel.prototype.addChangeListener = function(attrName,callbackFn){
		if (typeof this.subscribers[attrName] === "undefined") this.subscribers[attrName] = [];
		this.subscribers[attrName].push(callbackFn);
	}

	SalaryCalculatorModel.prototype.triggerChange = function(attrName){
		var listeners = this.subscribers[attrName] || [];
		for(var i=0; i<listeners.length;i++)
			listeners[i]();
	}

	SalaryCalculatorModel.prototype.calculate = function(){
		var gross =  this.basic() + this.hra() + this.da();
		this.salary(gross * ((100-this.tax())/100));
		this.triggerChange("salary");
	}