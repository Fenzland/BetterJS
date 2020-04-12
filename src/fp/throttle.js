import '../promisive.js';
import '../promise/make.js';

Reflect.defineProperty( Function.prototype, 'throttle', {
	value( interval=undefined, ){
		
		const original= this;
		let inInterval= false;
		let nextArgs;
		let promise;
		
		const forNext= async function( ...args ){
			inInterval= true;
			
			while( true )
			{
				
				nextArgs= undefined;
				promise= Promise.make();
				
				if( interval === undefined )
					await nextFrame();
				else
					await timeout( interval, );
				
				if( nextArgs === undefined )
					break;
				
				try
				{
					promise.resolve( original.call( this, ...nextArgs, ), );
				}
				catch( reason )
				{
					promise.reject( reason, );
				}
			}
			
			inInterval= false;
		};
		
		const result= async function( ...args ){
			if( !inInterval )
			{
				forNext.call( this, ...args, );
				
				return original.call( this, ...args, );
			}
			else
			{
				nextArgs= args;
				
				return promise.promise;
			}
		};
		
		Reflect.defineProperty( result, 'length', { value:this.length, }, );
		Reflect.defineProperty( result, 'name', { value:this.name, }, );
		
		return result;
	},
}, );
