import Ember from 'ember';

export default Ember.Component.extend({
	init(){
		this._super(...arguments);
		this.arrayOfBoard = Ember.String.w(this.attrs.board);
	},
	actions: {
		addBoard(val){
			this.get('arrayOfBoard').pushObject(val);
		}
	}
});
