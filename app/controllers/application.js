export default Ember.Controller.extend({
	url: "http://i.imgur.com/YuDUg7q.jpg",
	
	actions:{
		checkPassword: function(){
			this.set('unlocked',this.get('secret')==='meow');
		},
	}
});