function TaskCollection(){
	this.subscribers = {};
	var _items = [];
	this.add = function(taskName){
		var t = new TaskModel();
		t.id(new Date().getTime());
		t.name(taskName);
		_items.push(t);
		this.triggerChange("added",[t]);
	};
	this.items = _items;
	this.removeCompleted = function(){
		for(var i=_items.length-1;i>=0;i--){
			var t = _items[i];
			if (t.isCompleted()){
				t.remove();
				_items.splice(i,1);
			}
		}
	}
}
TaskCollection.prototype.addChangeListener = function(attrName,callbackFn){
	if (typeof this.subscribers[attrName] === "undefined") this.subscribers[attrName] = [];
	this.subscribers[attrName].push(callbackFn);
}

TaskCollection.prototype.triggerChange = function(attrName,args){
	var listeners = this.subscribers[attrName] || [];
	var argsList = args || [];
	for(var i=0; i<listeners.length;i++)
		listeners[i].apply(this,argsList);
}