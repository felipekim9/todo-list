import Component from '@ember/component';

export default Component.extend({
  showEditInput: false,
  actions: {
    checkToDo(result){
      if(result == true){
        this.set('item','isCompleted', false);
      } else {
        this.set('item','isCompleted', true);
      }
      console.log(this.get('item.isCompleted'));
    },
    doneEditing(value) {
      this.get("item").set('content', value);
      this.get('editItem')(this.get('item'));
      this.send('toggleTodo');
    },
    handleKeydown() {

    },
    toggleTodo() {
      this.toggleProperty('showEditInput');
    }
  }
});
