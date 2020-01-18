
Reflect.defineProperty( Function.prototype, 'rename', {
	value( name, ){
		Reflect.defineProperty( this, 'name', { value:name, }, );
		
		return this;
	},
}, );
