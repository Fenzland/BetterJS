
Reflect.defineProperty( Function.prototype, 'through', {
	value( walkerIndex=0, ){
		const result= ( ...params )=> (this( ...params, ), params.slice( walkerIndex, )[0]);
		
		Reflect.defineProperty( result, 'length', { value:this.length, }, );
		Reflect.defineProperty( result, 'name', { value:this.name, }, );
		
		return result;
	},
}, );
