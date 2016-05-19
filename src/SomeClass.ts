class SomeClass {
	foo(v:number):number {
		throw new Error('Error in line 3')
		return v * 2;
	}
}
export = SomeClass