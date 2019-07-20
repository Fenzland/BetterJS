
Object.defineProperty( Map.prototype, 'pop', {
	value( key, ){
		if( this.has( key, ) )
		{
			const value= this.get( key, );
			
			this.delete( key, );
			
			return value;
		}
		else
			return undefined;
	},
}, );

Object.defineProperty( WeakMap.prototype, 'pop', {
	value( key, ){
		if( this.has( key, ) )
		{
			const value= this.get( key, );
			
			this.delete( key, );
			
			return value;
		}
		else
			return undefined;
	},
}, );
