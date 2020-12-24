
Reflect.defineProperty( Function, 'pipe', {
	value( first, ...functions ){
		const result= functions.reduce( ( value, func, )=> ( ...args )=> func( value( ...args, ), ), ( ...args )=> first( ...args, ), );
		
		Reflect.defineProperty( result, 'length', { value:first.length, }, );
		
		return result;
	},
}, );

Reflect.defineProperty( Function, 'compose', {
	value( ...functions ){
		return Function.pipe( ...[ ...functions, ].reverse(), );
	},
}, );

Reflect.defineProperty( Function, 'asyncPipe', {
	value( first, ...functions ){
		const result= functions.reduce( ( value, func, )=> async ( ...args )=> func( await value( ...args, ), ), async ( ...args )=> first( ...args, ), );
		
		Reflect.defineProperty( result, 'length', { value:first.length, }, );
		
		return result;
	},
}, );

Reflect.defineProperty( Function, 'asyncCompose', {
	value( ...functions ){
		return Function.asyncPipe( ...[ ...functions, ].reverse(), );
	},
}, );
