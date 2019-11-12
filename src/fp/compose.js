
Reflect.defineProperty( Function, 'pipe', {
	value( ...functions ){
		return functions.reduce( ( value, func, )=> $=> func( value( $, ), ), $=> $, );
	},
}, );

Reflect.defineProperty( Function, 'compose', {
	value( ...functions ){
		return Function.pipe( ...[ ...functions, ].reverse(), );
	},
}, );
