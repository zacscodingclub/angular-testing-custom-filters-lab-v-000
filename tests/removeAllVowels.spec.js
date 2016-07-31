describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels in provided word', function() {
		var results = $filter('removeAllVowels')('word');

		expect(results).toEqual('wrd');
	});
});
