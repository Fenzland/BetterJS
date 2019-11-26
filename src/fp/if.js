import './noop.js';

Reflect.defineProperty( Function, 'if', {
	value: ( condition, func, )=> {
		if( typeof condition === 'function' )
		{
			const result= ( ...args )=> condition( ...args, )? func( ...args, ): args[0];
			
			Reflect.defineProperty( result, 'length', { value:func.length, }, );
			
			return result;
		}
		else
			return condition? func: Function.noop;
	},
}, );
