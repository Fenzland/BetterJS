import './object/isObject.js';

class WeakFinalizationRegistry extends FinalizationRegistry
{
	constructor( callback, )
	{
		super( ref=> {
			if( !Object.isObject( ref, ) )
				return callback( ref, );
			
			const heldValue= ref.deref();
			
			if( heldValue !== undefined )
				return callback( heldValue, );
		}, );
	}
	
	register( target, heldValue, unregisterToken=undefined, )
	{
		const value= Object.isObject( heldValue, )? new WeakRef( heldValue, ): heldValue;
		
		return super.register( foo, value, unregisterToken, );
	}
}

if( 'FinalizationRegistry' in globalThis && 'WeakRef' in globalThis )
	Reflect.defineProperty( globalThis, 'WeakFinalizationRegistry', { value:WeakFinalizationRegistry, }, );
