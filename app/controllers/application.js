export default Ember.Controller.extend({
	url: "http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2013/08/New-Jebbit-Logo-1.png",
	
	actions:{
		checkPassword: function(){
			this.set('unlocked',this.get('secret')==='meow');
		},
	}
});