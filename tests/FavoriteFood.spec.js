describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter the favorite food correctly', function() {
		var mockedList = [
			{
        name: 'Steve',
        favoriteFood: 'Pizza'
     	},
			{
      	name: 'Bob',
        favoriteFood: 'Steak'
     	},
			{
        name: 'Joe',
        favoriteFood: 'Carnitas'
    }];

		var pizzaResults = $filter('favoriteFood')(mockedList, 'Pizza');
		var steakResults = $filter('favoriteFood')(mockedList, 'Steak');
		var carnitasResults = $filter('favoriteFood')(mockedList, 'Carnitas');
		var noResults = $filter('favoriteFood')(mockedList, 'Test');

		expect(pizzaResults.length).toBe(1);
		expect(pizzaResults[0].name).toBe('Steve');
		expect(steakResults.length).toBe(1);
		expect(steakResults[0].name).toBe('Bob');
		expect(carnitasResults.length).toBe(1);
		expect(carnitasResults[0].name).toBe('Joe');
		expect(noResults.length).toBe(0);
	});
});
