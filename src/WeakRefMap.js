import './object/isObject.js';

class WeakRefMap
{
	#weakMap= new WeakMap();
	#strongMap= new Map();
	#keyRefs= new WeakMap();
	#keys= new Set();
	#finalizer = new FinalizationRegistry(key=> {
		if( !Object.isObject( key, ) )
			return this.#delete( key, );
		
		this.#keys.delete( key, );
		
		const realKey= key.deref();
		
		if( refKey )
			this.#delete( refKey, );
	});
	
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
		return this.#get( key, );
	}
	
	has( key, )
	{
		return this.#has( key, );
	}
	
	getOrSet( key, generator, afterSetting=undefined, )
	{
		const got= this.#get( key, );
		
		if( got !== undefined )
			return got;
		
		
		const value= generator();
		
		this.#set( key, value, );
		
		if( afterSetting )
			afterSetting( value, );
		
		return value;
	}
	
	delete( key, )
	{
		const hasKey= this.#has( key, );
		
		this.#delete( key, );
		
		return hasKey;
	}
	
	clear()
	{
		this.#weakMap.clear();
		this.#strongMap.clear();
	}
	
	get size()
	{
		return [ ...this, ].length;
	}
	
	*[Symbol.iterator]()
	{
		for( let key of this.#getPossibleKeys() )
		{
			const value= this.#get( key, );
			
			if( value !== undefined )
				yield [ key, value, ];
		}
	}
	
	*#getPossibleKeys()
	{
		for( const key of [ ...this.#keys, ] )
		{
			if( Object.isObject( key, ) )
			{
				const realKey= key.deref();
				
				if( realKey === undefined )
					this.#keys.delete( key, )
				else
					yield realKey;
			}
			else
				yield key;
		}
	}
	
	#put( entries, )
	{
		for( const { 0:key, 1:value, } of entries )
			this.#set( key, value, );
	}
	
	#set( key, value, )
	{
		const refKey= Object.isObject( key, )? new WeakRef( key, ): key;
		
		this.#keys.add( refKey, );
		
		this.#distinctMap( key, ).set( key, Object.isObject( value, )? new WeakRef( value, ): value, );
		
		if( Object.isObject( key, ) )
			this.#finalizer.register( key, refKey, );
		
		if( Object.isObject( value, ) )
			this.#finalizer.register( value, refKey, );
	}
	
	#get( key, )
	{
		const ref= this.#distinctMap( key, ).get( key, );
		
		if( !Object.isObject( ref, ) )
			return ref;
		
		const value= ref.deref();
		
		if( value === undefined )
			this.#delete( key, );
		
		return value;
	}
	
	#has( key, )
	{
		return this.#get( key, ) !== undefined;
	}
	
	#delete( key, )
	{
		const refRef= Object.isObject( key, )? this.#keyRefs.get( key, ): key;
		
		this.#keys.delete( keyRef, );
		this.#distinctMap( key, ).delete( key, );
	}
	
	#distinctMap( key, )
	{
		return Object.isObject( key, )? this.#weakMap: this.#strongMap
	}
}

if( 'WeakRef' in globalThis )
	Reflect.defineProperty( globalThis, 'WeakRefMap', { value:WeakRefMap, }, );
