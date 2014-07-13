import startApp from 'banner/tests/helpers/start-app';

var App;

module('Integration - Secret', {
	setup: function() { 
		App = startApp();
	},
	teardown: function() { 
		Ember.run(App, 'destroy');
	}
});

test( 'by default the image is not shown', function() {
	visit('/');
	andThen(function() {
		equal(find('.surprise').length,0);
	});
});

test( 'image is shown when password is correct', function() {
	visit('/');
	
	fillIn('input.secret-value','Jebbit.Ads!');
	click('button.check-password');
	andThen(function () {
		equal(find('.surprise').length,1);
	});

	fillIn('input.secret-value','Not Jebbit.Ads!');
	click('button.check-password');
	andThen(function(){
		equal(find('.surprise').length,0);
	});
});