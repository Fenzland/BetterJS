
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

Reflect.defineProperty( Array.prototype, 'seek', {
	value( predicate, deflt=undefined, ){
		const idx= this.findIdx( predicate, );
		
		return Number.isNaN( idx, )? deflt: this[idx];
	},
}, );

Reflect.defineProperty( Array.prototype, 'seekLast', {
	value( predicate, deflt=undefined, ){
		const idx= this.findLastIdx( predicate, );
		
		return Number.isNaN( idx, )? deflt: this[idx];
	},
}, );

Reflect.defineProperty( Array.prototype, 'dig', {
	value( callback, deflt=undefined, ){
		for( let I= 0; I < this.length; ++I )
		{
			const result= callback( this[I], I, this, );
			
			if( result !== undefined )
				return result;
		}
		
		return deflt;
	},
}, );

Reflect.defineProperty( Array.prototype, 'digLast', {
	value( callback, deflt=undefined, ){
		for( let I= this.length; --I >= 0; )
		{
			const result= callback( this[I], I, this, );
			
			if( result !== undefined )
				return result;
		}
		
		return deflt;
	},
}, );
