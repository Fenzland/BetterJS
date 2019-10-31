
[
	'Object',
	'String',
	'Number',
	'Symbol',
	'Boolean',
	'BigInt',
].forEach( type=> {
	if( globalThis[type] )
		Reflect.defineProperty( globalThis[type].prototype, '|>', {
			value( ...functions ){
				return functions.reduce( ( value, func, )=> func( value, ), this.valueOf(), );
			},
		}, );
}, );