import '../../utils/fix_module.ts';

declare global
{
	interface StringConstructor
	{
		compare( stringX:string, stringY:string, ):number;
	}
}

/**
 * Compare two strings, returns -1, 0 or 1.
 */
Reflect.defineProperty( String, 'compare', {
	value( stringX:string='', stringY:string='', ):number{
		const x:string= stringX;
		const y:string= stringY;
		const length:number= Math.min( x.length, y.length, );
		const unify= value=> value > 0? 1: value < 0? -1: 0;
		
		for( let index:number= 0; index < length; ++index )
		{
			const diff:number= y.charCodeAt( index, ) - x.charCodeAt( index, );
			
			if( diff )
				return unify( diff, );
		}
		
		return unify( y.length - x.length, );
	},
}, );