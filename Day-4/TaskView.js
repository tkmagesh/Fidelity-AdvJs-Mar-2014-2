function TaskView(model){
	var _model = model,
		that = this;

		this.$root = $("<li>");

	this.init = function(){
		this.$root.click(function(){
			_model.toggleCompletion();
		});

		_model.addChangeListener("isCompleted",updateCompletionStatus);
		_model.addChangeListener("removed", function(){
			that.$root.remove();
		});

	}
	function updateCompletionStatus(){
		if (_model.isCompleted()){
			that.$root.addClass("completed");
		} else {
			that.$root.removeClass("completed");
		}
	}
	this.render = function(){
		that.$root.html(_model.name());
		updateCompletionStatus();
		return this;
	}
}