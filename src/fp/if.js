import './noop.js';

Reflect.defineProperty( Function, 'if', {
	value: ( condition, func, )=> {
		if( typeof condition !== 'function' )
			return condition? func: Function.noop;
		else
		if( typeof func !== 'function' )
		{
			const result= ( ...args )=> condition( ...args, )? func: args[0];
			
			Reflect.defineProperty( result, 'length', { value:func.length, }, );
			
			return result;
		}
		else
		{
			const result= ( ...args )=> condition( ...args, )? func( ...args, ): args[0];
			
			Reflect.defineProperty( result, 'length', { value:func.length, }, );
			
			return result;
		}
	},
}, );
