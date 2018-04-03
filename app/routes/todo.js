import Route from '@ember/routing/route';
import {storageFor} from 'ember-local-storage';

export default Route.extend({
  todo: storageFor('todo'),
  actions: {
    createItem(e){
      if (e.keyCode === 13) {
        this.get('todo').addObject(e.target.value)
      }
    }
  }

});
