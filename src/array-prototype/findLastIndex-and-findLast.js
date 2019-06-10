
Object.defineProperty( Array.prototype, 'findLastIndex', {
	value( predicate, context, ){
		
		for( let I= this.length; --I >= 0; )
		{
			const predication= predicate.call( context, this[I], I, this, );
			
			if( predication )
				return I;
		}
		
		return -1;
	},
}, );

Object.defineProperty( Array.prototype, 'findLast', {
	value( predicate, context, ){
		return this[this.findLastIndex( predicate, context, )];
	},
}, );
