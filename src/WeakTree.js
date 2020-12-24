import './map-and-set/getOrSet.js';

class WeakTree
{
	#defined= false;
	#value;
	#branches= new WeakMap();
	
	constructor( entries=[], )
	{
		this.put( entries, );
	}
	
	has( key, )
	{
		return (
			!Array.isArray( key, )? false:
			!key.length? this.#defined:
			!this.#branches.has( key[0], )? false:
			this.#branches.get( key[0], ).has( key, )
		);
	}
	
	get( key, )
	{
		return (
			!Array.isArray( key, )? undefined:
			!key.length? this.#value:
			!this.#branches.has( key[0], )? undefined:
			this.#branches.get( key[0], ).get( key, )
		);
	}
	
	set( key, value, )
	{
		if(!( isKeyValid( key, ) ))
			throw new TypeError( 'key for WeakTree must be array of object', );
		
		if( key.length )
			this.#branches.getOrSet( key[0], ()=> new WeakTree, ).set( key.slice( 1, ), value, );
		else
		{
			this.#defined= true;
			this.#value= value;
		}
	}
	
	put( entries, )
	{
		for( const { 0:key, 1:value, } of entries )
			this.set( key, value, );
	}
	
	pop( key, )
	{
		if( this.has( key, ) )
		{
			const value= this.get( key, );
			
			this.delete( key, );
			
			return value;
		}
		else
			return undefined;
	}
	
	getOrSet( key, generator, afterSetted=undefined, )
	{
		if( this.has( key, ) )
			return this.get( key, );
		else
		{
			const value= generator();
			
			if( isKeyValid( key, ) )
				this.set( key, value, );
			
			if( afterSetted )
				afterSetted( value, );
			
			return value;
		}
	}
	
	delete
}

Reflect.defineProperty( globalThis, 'WeakTree', { value:WeakTree, }, );

function isKeyValid( key, )
{
	return Array.isArray( key, ) && key.every( $=> Object ($) === $, );
}
