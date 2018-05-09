import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('todo');
  },

  actions: {
    createItem(todoItem) {
      let newTodo = this.get('store').createRecord('todo', {content: todoItem});
      newTodo.save();
    },

    editItem(todo) {
      todo.save();
    },

    deleteItem(todo) {
      todo.destroyRecord();
    }
  }
});
