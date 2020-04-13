import '../../utils/fix_module.ts';

declare global
{
	interface String
	{
		idxOf( searchString:string, position?:number, ):number;
		lastIdxOf( searchString:string, position?:number, ):number;
		searchIdx( searcher:(string|RegExp), ):number;
	}
}

/**
 * Better index finding, return NaN instead of -1 for not found.
 */

Reflect.defineProperty( String.prototype, 'idxOf', {
	value( searchString, position=0, ):number{
		const index= this.indexOf( searchString, position, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( String.prototype, 'lastIdxOf', {
	value( searchString, position=Infinity, ):number{
		const index= this.lastIndexOf( searchString, position, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( String.prototype, 'searchIdx', {
	value( searcher:(string|RegExp), ):number{
		const index= this.search( searcher, );
		
		return index === -1? NaN: index;
	},
}, );
