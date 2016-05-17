describe('primes kata testing', function() {

	it('should be able to run tests', function() {
		expect(1+1).toBe(2);
	});

	it('should be able to talk to another file', function() {
		expect(primes()).toBeDefined();
	});

	it('should return 2 when passed 2', function() {
		expect(primes(2)).toEqual([2]);
	});

	it('should return 2 and 2 when passed 4', function() {
		expect(primes(4)).toEqual([2, 2]);
	});

	it('should return 2, 2, and 2 when passed 8', function() {
		expect(primes(8)).toEqual([2, 2, 2]);
	});

	it('should return 3 when passed 3', function() {
		expect(primes(3)).toEqual([3]);
	});

	it('should return 2, 2, 2, 2, 2, 5, and 23 when passed 3680', function() {
		expect(primes(3680)).toEqual([2, 2, 2, 2, 2, 5, 23]);
	});
})