
Reflect.defineProperty( Map.prototype, 'reduce', {
	value( callback, initialValue=undefined, ){
		let result= initialValue;
		
		this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'reduce', {
	value( callback, initialValue=undefined, ){
		let result= initialValue;
		
		this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
		
		return result;
	},
}, );
