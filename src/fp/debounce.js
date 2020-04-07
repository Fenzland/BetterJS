import '../promise/make.js';
globalThis.z=( x, ...a )=> (console.warn( x, ...a, ), x);

Reflect.defineProperty( Function.prototype, 'debounce', {
	value( delay=250, ){
		
		const original= this;
		let process;
		let promise;
		
		const result= async function( ...args ){
			if( process !== undefined )
				clearTimeout( process, );
			else
				window.taueee= promise= Promise.make();
			
			process= setTimeout( ()=> {
				promise.resolve( original.call( this, ...args, ), );
				process= undefined;
			}, delay, );
			
			return promise.promise;
		};
		
		Reflect.defineProperty( result, 'length', { value:this.length, }, );
		Reflect.defineProperty( result, 'name', { value:this.name, }, );
		
		return result;
	},
}, );
