import Component from '@ember/component';

export default Component.extend({
  showEditInput: false,

  actions: {
    checkToDo(result) {
      if (result == true) {
        this.set('item','isCompleted', false);
      } else {
        this.set('item','isCompleted', true);
      }
    },

    doneEditing(e) {
      const enterKeyCode = 13;
      const isEnterCode = (e.keyCode === enterKeyCode);
      let inputValue = e.target.value;

      if (isEnterCode) {
        const todoItem = this.get('item');
        todoItem.set('content', inputValue);
        this.get('editItem')(todoItem);
        this.send('toggleTodo');
      }
    },

    toggleTodo() {
      this.toggleProperty('showEditInput');
    }
  }

});
