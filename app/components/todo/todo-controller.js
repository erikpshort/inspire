(function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var ts = new TodoService(this.setTodos)

	new Vue({
		el: '#todo',
		data: {
			todos: [],
			todo: '',
			count: 0,
		},
		mounted: function () {
			this.todos = ts.getTodos()
			this.count = this.todos.length
		},
		methods:{
			setTodos: function (t){
				this.todos = t
			},
		        addTodo: function (todo, index) {
				this.todos.push(todo);
				this.count = this.todos.length
				ts.saveTodos(this.todos)
		},
			removeTodo: function(todo, i){
				this.todos.shift(i)
				this.count -= 1
				ts.saveTodos(this.todos)
			},

        },




	})



}())

