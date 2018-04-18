import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('todo');
  },

  actions: {
    createItem(e) {
      if (e.keyCode === 13) {
        let newTodo = this.get('store').createRecord('todo', {content: e.target.value});
        newTodo.save();
      }
    }
  }
});
