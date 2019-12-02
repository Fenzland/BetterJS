
Reflect.defineProperty( Function.prototype, 'await', {
	value(){
		const result= async ( ...promises )=> this( ...await Promise.all( promises, ), );
		
		Reflect.defineProperty( result, 'length', { value:this.length, }, );
		Reflect.defineProperty( result, 'name', { value:this.name, }, );
		
		return result;
	},
}, );
