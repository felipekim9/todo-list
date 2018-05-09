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
  })
});
