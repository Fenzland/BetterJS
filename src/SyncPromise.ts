import '../utils/fix_module.ts';

declare global
{
	interface SyncPromiseConstructor extends PromiseConstructorLike
	{
		new <T>( callback:Function, ):PromiseLike<T>;
		resolve<V>( value, ):PromiseLike<V>
		reject<V>( reason, ):PromiseLike<V>
	}
	
	interface SyncPromise<T> extends PromiseLike<T>
	{
	}
}

type Privatize<T>= {
	status: ('pending'|'resolved'|'rejected');
	value: T;
	reason: any;
	caught: boolean;
};

const privatizes= new WeakMap();

const SyncPromise:SyncPromiseConstructor= class SyncPromise<T> implements PromiseLike<T>
{
	constructor( callback:Function, )
	{
		const _this:Privatize<T>= {
			status: 'pending',
			value: undefined,
			reason: undefined,
			caught: false,
		};
		
		try
		{
			_this.value= callback();
			_this.status= 'resolved';
		}
		catch( error )
		{
			_this.reason= error;
			_this.status= 'rejected';
		}
		
		// if the callback is asynchronous, returns the async Promise
		if( _this.value instanceof Promise )
			return _this.value;
		
		privatizes.set( this, _this, );
		
		Promise.resolve().then( ():(void|never)=> {
			if( _this.status === 'rejected' && !_this.caught )
				throw _this.reason;
		}, );
	}
	
	then<T,V>( callback:Function=undefined, catchCallback:Function=undefined, ):PromiseLike<T>
	{
		const _this:Privatize<T>= privatizes.get( this, );
		
		if( _this.status === 'resolved' )
		{
			if( callback )
				return (<SyncPromiseConstructor>this.constructor).resolve( callback( _this.value, ), );
			else
				return (<SyncPromiseConstructor>this.constructor).resolve( _this.value, );
		}
		else
		if( _this.status === 'rejected' )
		{
			_this.caught= true;
			
			if( catchCallback )
				return (<SyncPromiseConstructor>this.constructor).resolve( catchCallback( _this.reason, ), );
			else
				return (<SyncPromiseConstructor>this.constructor).reject( _this.reason, );
		}
		else
			throw new Error( 'cannot call .then(), .catch() or .finally() on a pending SyncPromise.', );
	}
	
	catch<T>( callback:Function=undefined, ):SyncPromise<T>
	{
		return <SyncPromise<T>>this.then( undefined, callback, );
	}
	
	finally<T>( callback:Function=undefined, ):SyncPromise<T>
	{
		if( callback )
			callback();
		
		return <SyncPromise<T>>this.then();
	}
	
	static resolve<V>( value, ):PromiseLike<V>
	{
		return new this( ()=> value, );
	}
	
	static reject<V>( reason, ):PromiseLike<V>
	{
		return new this( ()=> { throw reason; }, );
	}
}

globalThis.SyncPromise= SyncPromise;
