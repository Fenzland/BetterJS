
Reflect.defineProperty( Object.prototype, '|>', {
	value( ...functions ){
		return functions.reduce( ( value, func, )=> func( value, ), this.valueOf(), );
	},
}, );

Reflect.defineProperty( Object.prototype, '||>', {
	value( ...functions ){
		return functions.reduce(
			( value, func, )=>
				value instanceof Promise? value.then( func, ): func( value, )
			,
			this.valueOf(),
		);
	},
}, );
