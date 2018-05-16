import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  isAllCompleted: computed('model.@each.isCompleted', function(){
    const model= this.get('model');
    const isAllCompleted = model.isEvery('isCompleted');
    return isAllCompleted;
  }),

  actions: {
    toggleAll() {
      const isAllCompleted = !this.get('isAllCompleted');
      const model = this.get('model');
      model.setEach('isCompleted', isAllCompleted);
    }
  }
});
