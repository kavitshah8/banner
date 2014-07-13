export default Ember.Controller.extend({
	url: "/img/jebbit.jpg",

	actions:{
		checkPassword: function(){
			this.set('unlocked',this.get('secret')==='Jebbit.Ads!');
		},
	}
});