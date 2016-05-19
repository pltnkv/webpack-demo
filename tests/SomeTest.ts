/// <reference path="jasmine.d.ts"/>
import SomeClass = require('SomeClass')

describe('example', function () {
	it('works for simple object', () => {
		let cls = new SomeClass()
		expect(cls.foo(2)).toBe(4)
	});
});
