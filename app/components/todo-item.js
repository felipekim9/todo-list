import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkToDo(result){
      if(result == true){
        this.set('item','isCompleted', false);
      } else {
        this.set('item','isCompleted', true);
      }
      console.log(this.get('item.isCompleted'));
    }
  }
});
