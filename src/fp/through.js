
Reflect.defineProperty( Function.prototype, 'through', {
	value( walkerIndex=0, ){
		return ( ...params )=> (this( ...params, ), params.slice( walkerIndex, )[0]);
	},
}, );
