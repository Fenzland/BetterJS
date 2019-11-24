
Reflect.defineProperty( Array.prototype, 'findLastIndex', {
	value( predicate, context=undefined, ){
		
		for( let I= this.length; --I >= 0; )
		{
			const predication= predicate.call( context, this[I], I, this, );
			
			if( predication )
				return I;
		}
		
		return -1;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findLast', {
	value( predicate, context, ){
		return this[this.findLastIndex( predicate, context, )];
	},
}, );

Reflect.defineProperty( Array.prototype, 'idxOf', {
	value( searchElement, fromIndex=0, ){
		const index= this.indexOf( searchElement, fromIndex, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'lastIdxOf', {
	value( searchElement, fromIndex=Infinity, ){
		const index= this.lastIndexOf( searchElement, fromIndex, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findIdx', {
	value( predicate, ){
		const index= this.findIndex( predicate, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findLastIdx', {
	value( predicate, ){
		const index= this.findLastIndex( predicate, );
		
		return index === -1? NaN: index;
	},
}, );
