import './object/equal.js';

class RetracedMap extends Map
{
	#retrace= new Map();
	
	constructor( entries=[], )
	{
		super();
		
		this.put( entries, );
	}
	
	retrace( value, )
	{
		return this.#retrace.get( value, );
	}
	
	hasValue( value, )
	{
		return this.#retrace.has( value, );
	}
	
	set( key, value, )
	{
		if( super.has( key, ) )
		{
			const origin= super.get( key, );
			
			if( Object.equal( origin, value, ) )
				return super.set( key, value, );
			
			this.#retrace.delete( origin, );
		}
		
		if( this.#retrace.has( value, ) )
			super.delete( this.#retrace.get( value, ), );
		
		this.#retrace.set( value, key, );
		return super.set( key, value, );
	}
	
	popRetraced( value, )
	{
		if( this.#retrace.has( value, ) )
		{
			const key= this.#retrace.get( value, );
			
			super.delete( key, );
			this.#retrace.delete( value, );
			
			return key;
		}
		
		return undefined;
	}
	
	delete( key, )
	{
		if( super.has( key, ) )
			this.#retrace.delete( super.get( key, ), );
		
		return super.delete( key, );
	}
	
	deleteValue( value, )
	{
		if(!( this.#retrace.has( value, ) ))
			return false;
		
		super.delete( this.#retrace.get( value, ), );
		this.#retrace.delete( value, );
		
		return true;
	}
	
	clear()
	{
		this.#retrace.clear();
		super.clear();
	}
}

Reflect.defineProperty( globalThis, 'RetracedMap', { value:RetracedMap, }, );
