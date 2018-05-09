import Component from '@ember/component';

export default Component.extend({
  inputValue: null,

  actions: {
    create(e) {
      const enterKeyCode = 13;
      const isEnterCode = (e.keyCode === enterKeyCode);
      let inputValue = e.target.value;

      if (isEnterCode) {
        this.get('createItem')(inputValue);
        this.$('input').val('');
      }
    }
  }
});
