
class SyncPromise
{
	/**
	 * type |'pending'|'resolved'|'rejected'|
	 */
	#status= 'pending';
	
	/**
	 * type <any>
	 */
	#value;
	
	/**
	 * type <any>
	 */
	#reason;
	
	/**
	 * type (boolean)
	 */
	#caught= false;
	
	constructor( callback, )
	{
		try
		{
			this.#value= callback();
			this.#status= 'resolved';
		}
		catch( error )
		{
			this.#reason= error;
			this.#status= 'rejected';
		}
		
		// if the callback is asynchronous, returns the async Promise
		if( this.#value instanceof Promise )
			return this.#value;
		
		Promise.resolve().then( ()=> {
			if( this.#status === 'rejected' && !this.#caught )
				throw this.#reason;
		}, );
	}
	
	then( callback=undefined, catchCallback=undefined, )
	{
		if( this.#status === 'resolved' )
		{
			if( callback && typeof callback === 'function' )
				return this.constructor.resolve( callback( this.#value, ), );
			else
				return this.constructor.resolve( this.#value, );
		}
		else
		if( this.#status === 'rejected' )
		{
			this.#caught= true;
			
			if( catchCallback && typeof catchCallback === 'function' )
				return this.constructor.resolve( catchCallback( this.#reason, ), );
			else
				return this.constructor.reject( this.#reason, );
		}
		else
			throw new Error( 'cannot call .then(), .catch() or .finally() on a pending SyncPromise.', );
	}
	
	catch( callback=undefined, )
	{
		return this.then( undefined, callback, );
	}
	
	finally( callback=undefined, )
	{
		if( callback && typeof callback === 'function' )
			callback();
		
		return this.then();
	}
	
	static resolve( value, )
	{
		return new this( ()=> value, );
	}
	
	static reject( reason, )
	{
		return new this( ()=> { throw reason; }, );
	}
}

Reflect.defineProperty( globalThis, 'SyncPromise', { value:SyncPromise, }, );
