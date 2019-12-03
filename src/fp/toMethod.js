
Reflect.defineProperty( Function.prototype, 'toMethod', {
	value( contextIndex=0, ){
		const origin= this;
		
		if(!(
			contextIndex >= -this.length
		&&
			contextIndex<<0 === contextIndex
		))
			throw new TypeError( `parameter of toMethod must be an integer between length and not less then -${this.length}`, );
		
		if( contextIndex < 0 )
			contextIndex-=- this.length;
		
		const attached= function( ...args ){
			if( args.length < contextIndex )
				args.length= contextIndex;
			
			return origin( ...args.slice( 0, contextIndex, ), this, args.slice( contextIndex, ), );
		};
		
		Reflect.defineProperty( attached, 'length', { value:(this.length - 1), }, );
		Reflect.defineProperty( attached, 'name', { value:this.name, }, );
		
		return attached;
	},
}, );
