import Component from '@ember/component';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Component.extend({
  total: reads('model.length'),
  totalMessage: computed('total', function() {
    let total = this.get('total');

    if (total > 1) {
      return "Itens na lista";
    } else {
      return "Item na lista";
    }
  }),

  isThereChecked: computed('model.@each.isCompleted', function(){
    const model= this.get('model');
    const isAnyCompleted = model.isAny('isCompleted');
    return isAnyCompleted;
  }),

  actions: {
    clearCompleted() {
      // const model= this.get('model');
      // const checkedTodos = model.filterBy('isCompleted', true);
      //
      // checkedTodos.invoke('destroyRecord');
      this.get('model')
        .filterBy('isCompleted', true)
        .invoke('destroyRecord');
    }
  }
});
