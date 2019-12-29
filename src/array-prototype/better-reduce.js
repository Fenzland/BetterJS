
/**
 * If initial value not given, use undefined, instead of erratically use the first item.
 */
{
	Reflect.defineProperty( Array.prototype, 'reduce', {
		value( callback, initialValue=undefined, ){
			let value= initialValue;
			let index= 0;
			
			for( const item of this )
				value= callback( value, item, index++, this, );
			
			return value;
		},
	}, );
}
