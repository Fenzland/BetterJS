import '../../utils/fix_module.ts';

/**
 * If initial value not given, use undefined, instead of erratically use the first item.
 */
{
	const origin= Array.prototype.reduce;
	
	Reflect.defineProperty( Array.prototype, 'reduce', {
		value<T,R>( callback:(( value:R, item:T, index:number, self:T[], )=>R), initialValue:R=undefined, ){
			return origin.call( this, callback, initialValue, );
		},
	}, );
}
