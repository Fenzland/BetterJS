
/**
 * Better index finding, return undefined instead of -1 for not found.
 */

Reflect.defineProperty( String.prototype, 'idxOf', {
	value( searchString, position=0, ){
		const index= this.indexOf( searchString, position, );
		
		return index === -1? undefined: index;
	},
}, );

Reflect.defineProperty( String.prototype, 'lastIdxOf', {
	value( searchString, position=Infinity, ){
		const index= this.lastIndexOf( searchString, position, );
		
		return index === -1? undefined: index;
	},
}, );

Reflect.defineProperty( String.prototype, 'searchIdx', {
	value( searcher, ){
		const index= this.search( searcher, );
		
		return index === -1? undefined: index;
	},
}, );
