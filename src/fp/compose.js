import '../array-prototype/better-reduce.js';
import '../array-prototype/reversed.js';

Reflect.defineProperty( Function, 'pipe', {
	value( ...functions ){
		return functions.reduce( ( value, func, )=> $=> func( value( $, ), ), $=> $, );
	},
}, );

Reflect.defineProperty( Function, 'compose', {
	value( ...functions ){
		return Function.pipe( ...functions.reversed(), );
	},
}, );
