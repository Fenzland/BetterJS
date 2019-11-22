
Reflect.defineProperty( Object.prototype, '|>', {
	value( ...functions ){
		return functions.reduce( ( value, func, )=> func( value, ), this.valueOf(), );
	},
}, );
