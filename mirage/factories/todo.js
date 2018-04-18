import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  content(i) {
    return faker.lorem.paragraph();
  },
  isCompleted: false
});
