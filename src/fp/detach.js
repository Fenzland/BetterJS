
/**
 * Detach method from prototype and become purer function.
**/

Reflect.defineProperty( Function.prototype, 'detach', {
	value(){
		const detached= ( context, ...params )=> this.call( context, ...params, );
		
		Reflect.defineProperty( detached, 'length', { value:(this.length - - 1), }, );
		
		return detached;
	},
}, );

Reflect.defineProperty( Function.prototype, 'detachTail', {
	value(){
		const detached= ( ...args )=> this.call(
			...args.slice( 0, -1, ),
			...args.slice( -1, ),
		);
		
		Reflect.defineProperty( detached, 'length', { value:(this.length - - 1), }, );
		
		return detached;
	},
}, );
