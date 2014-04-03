function TaskModel(){
	var _id = 0,
		_name = "",
		_isCompleted = false;
	this.subscribers = {};


	this.id = function(val){
		if (typeof val === "undefined") return _id;
		_id = val;
		this.triggerChange("id");
	};

	this.name = function(val){
		if (typeof val === "undefined") return _name;
		_name = val;
		this.triggerChange("name");
	};

	this.isCompleted = function(){
		return _isCompleted;
	};

	this.toggleCompletion = function(){
		_isCompleted = !_isCompleted;
		this.triggerChange("isCompleted");
	};

	this.remove = function(){
		this.triggerChange("removed");
	}

}

TaskModel.prototype.addChangeListener = function(attrName,callbackFn){
	if (typeof this.subscribers[attrName] === "undefined") this.subscribers[attrName] = [];
	this.subscribers[attrName].push(callbackFn);
}

TaskModel.prototype.triggerChange = function(attrName){
	var listeners = this.subscribers[attrName] || [];
	for(var i=0; i<listeners.length;i++)
		listeners[i]();
}