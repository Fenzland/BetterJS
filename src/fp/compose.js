
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

Reflect.defineProperty( Function, 'asyncPipe', {
	value( ...functions ){
		return functions.reduce( ( value, func, )=> async $=> func( await value( $, ), ), async $=> $, );
	},
}, );

Reflect.defineProperty( Function, 'asyncCompose', {
	value( ...functions ){
		return Function.asyncPipe( ...[ ...functions, ].reverse(), );
	},
}, );
