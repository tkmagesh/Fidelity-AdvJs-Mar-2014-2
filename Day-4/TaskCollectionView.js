function TaskCollectionView(model,templateId){
	var _model = model,
		that = this;
	this.$root = $("<div>");
	this.init = function(){
		

		this.$root.on("click","#btnAddTask",function(){
			var taskName = that.$root.find("#txtTask").val();
			_model.add(taskName);
		});

		this.$root.on("click","#btnRemoveCompleted",function(){
			_model.removeCompleted();
		});

		_model.addChangeListener("added",function(newTask){
			var tv = new TaskView(newTask);
			tv.init();
			tv.render();
			that.$root.find("#ulTaskList").append(tv.$root);
		});
		
	};

	this.render = function(){
		this.$root.append($(templateId).html());
		return this;
	}
}