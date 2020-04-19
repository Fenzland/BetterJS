
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
		
		return index === -1? undefined: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'lastIdxOf', {
	value( searchElement, fromIndex=Infinity, ){
		const index= this.lastIndexOf( searchElement, fromIndex, );
		
		return index === -1? undefined: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findIdx', {
	value( predicate, ){
		let offset= 0;
		
		let index= this.findIndex( ( ...args )=> {
			const value= predicate( ...args, );
			
			if( typeof value !== 'number' )
				return value;
			
			offset-=- value;
			
			return true;
		}, );
		
		if( index === -1 )
			return undefined;
		
		index-=- offset;
		
		return (
			index < 0? 0:
			index >= this.length? this.length - 1:
			index
		);
	},
}, );

Reflect.defineProperty( Array.prototype, 'findLastIdx', {
	value( predicate, ){
		let offset= 0;
		
		let index= this.findLastIndex( ( ...args )=> {
			const value= predicate( ...args, );
			
			if( typeof value !== 'number' )
				return value;
			
			offset-=- value;
			
			return true;
		}, );
		
		if( index === -1 )
			return undefined;
		
		index-=- offset;
		
		return (
			index < 0? 0:
			index >= this.length? this.length - 1:
			index
		);
	},
}, );

Reflect.defineProperty( Array.prototype, 'seek', {
	value( predicate, deflt=undefined, ){
		const idx= this.findIdx( predicate, );
		
		return idx!==undefined? this[idx]: deflt;
	},
}, );

Reflect.defineProperty( Array.prototype, 'seekLast', {
	value( predicate, deflt=undefined, ){
		const idx= this.findLastIdx( predicate, );
		
		return idx!==undefined? this[idx]: deflt;
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
