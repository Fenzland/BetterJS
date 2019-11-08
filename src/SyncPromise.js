
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
	
	then( callback, catchCallback, )
	{
		if( this.#status === 'resolved' )
		{
			if( callback )
				return this.constructor.resolve( callback( this.#value, ), );
			else
				return this.constructor.resolve( this.#value, );
		}
		else
		if( this.#status === 'rejected' )
		{
			this.#caught= true;
			
			if( catchCallback )
				return this.constructor.resolve( catchCallback( this.#reason, ), );
			else
				return this.constructor.reject( this.#reason, );
		}
		else
			throw new Error( 'cannot call .then(), .catch() or .finally() on a pending SyncPromise.', );
	}
	
	catch( callback, )
	{
		return this.then( undefined, callback, );
	}
	
	finally( callback, )
	{
		if( callback )
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

globalThis.SyncPromise= SyncPromise;
