import Ember from 'ember';

export default Ember.Component.extend({
	init(){
		this._super(...arguments);
		this.arrayOfItem = [];
	},

	arrayOfItem: [],
	actions: {
		addItem(val){
			this.get('arrayOfItem').pushObject(val);
		},
		deleteItem(val){
			this.get('arrayOfItem').removeObject(val);
		}
	}
});
