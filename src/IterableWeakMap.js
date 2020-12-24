import './map-and-set/getOrSet.js';
import './object/isObject.js';

class IterableWeakMap
{
	#weakMap= new WeakMap();
	#keyRefs= new WeakMap();
	#keys= new Set();
	
	constructor( entries=[], )
	{
		this.#put( entries, );
	}
	
	put( entries, )
	{
		this.#put( entries, );
	}
	
	set( key, value, )
	{
		this.#set( key, value, );
		
		return value;
	}
	
	get( key, )
	{
		return this.#weakMap.get( key, );
	}
	
	has( key, )
	{
		return this.#weakMap.has( key, );
	}
	
	getOrSet( key, generator, afterSetting=undefined, )
	{
		return this.#weakMap.getOrSet( key, generator, value=> {
			this.#addKey( key, );
			
			afterSetting( value, );
		}, );
	}
	
	delete( key, )
	{
		return this.#delete( key, );
	}
	
	clear()
	{
		for( const key of this.#getKeys() )
			this.#delete( key, );
	}
	
	get size()
	{
		return [ ...this.#getKeys(), ].length;
	}
	
	*[Symbol.iterator]()
	{
		for( let key of this.#getKeys() )
			yield [ key, this.#weakMap.get( key, ), ];
	}
	
	*#getKeys()
	{
		for( const key of [ ...this.#keys, ] )
		{
			const realKey= key.deref();
			
			if( realKey === undefined )
				this.#keys.delete( key, )
			else
				yield realKey;
		}
	}
	
	#put( entries, )
	{
		for( const { 0:key, 1:value, } of entries )
			this.#set( key, value, );
	}
	
	#set( key, value, )
	{
		if( !Object.isObject( key, ) )
			throw new TypeError( 'Invalid value used as weak map key', );
		
		this.#weakMap.set( key, value, );
		
		this.#addKey( key, );
	}
	
	
	#delete( key, )
	{
		if( !this.#weakMap.has( key, ) )
			return false;
		
		const ref= this.#keyRefs.get( key, );
		
		this.#weakMap.delete( key, );
		this.#keyRefs.delete( key, );
		this.#keys.delete( ref, );
		
		return true;
	}
	
	#addKey( key, )
	{
		this.#keyRefs.getOrSet( key, ()=> new WeakRef( key, ), ref=> this.#keys.add( ref, ), );
	}
}

if( 'WeakRef' in globalThis )
	Reflect.defineProperty( globalThis, 'IterableWeakMap', { value:IterableWeakMap, }, );
