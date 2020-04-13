import '../../utils/fix_module.ts';

declare global
{
	interface FunctionConstructor
	{
		isFunction( value:any, ):boolean;
		isClass( value:any, ):boolean;
		isAsync( value:any, ):boolean;
	}
}

/**
 * check whether a value is a class
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Function, 'isFunction', {
	value( value:any, ):boolean{
		if( typeof value !== 'function' )
			return false;
		
		const code:string= value.toString();
		
		return !(code.startsWith( 'class', ) || code.startsWith( 'async class', ));
	},
}, );

/**
 * check whether a value is a function (but not a class)
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Function, 'isClass', {
	value( value:any, ):boolean{
		if( typeof value !== 'function' )
			return false;
		
		const code:string= value.toString();
		
		return code.startsWith( 'class', ) || code.startsWith( 'async class', );
	},
}, );

/**
 * check whether a value is asynchronous
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Function, 'isAsync', {
	value( value:any, ):boolean{
		if( typeof value !== 'function' )
			return false;
		
		const code:string= value.toString();
		
		return code.startsWith( 'async', );
	},
}, );
