import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  isCompleted: DS.attr('boolean', {defaultValue: false})
});
