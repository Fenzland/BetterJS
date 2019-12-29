
Reflect.defineProperty( Function.prototype, 'valve', {
	value( length=1, ){
		length= length<<0;
		
		if( length < 0 )
			length= this.length - - length;
		
		if( length < 0 )
			length= 0;
		
		const original= this;
		
		const result= function( ...params ){
			return original.call( this, ...params.slice( 0, length, ), );
		};
		
		Reflect.defineProperty( result, 'length', { value:length, }, );
		Reflect.defineProperty( result, 'name', { value:this.name, }, );
		
		return result;
	},
}, );
