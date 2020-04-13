import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		findLastIndex<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), context?:any, ):number;
		findLast<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), context?:any, ):number;
		idxOf<T>( searchElement:T, fromIndex?:number, ):number;
		lastIdxOf<T>( searchElement:T, fromIndex?:number, ):number;
		findIdx<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), );
		findLastIdx<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), );
	}
}

Reflect.defineProperty( Array.prototype, 'findLastIndex', {
	value<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), context:any=undefined, ):number{
		
		for( let I:number= this.length; --I >= 0; )
		{
			const predication:boolean= predicate.call( context, this[I], I, this, );
			
			if( predication )
				return I;
		}
		
		return -1;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findLast', {
	value<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), context:any=undefined, ):number{
		return this[this.findLastIndex( predicate, context, )];
	},
}, );

Reflect.defineProperty( Array.prototype, 'idxOf', {
	value<T>( searchElement:T, fromIndex:number=0, ):number{
		const index:number= this.indexOf( searchElement, fromIndex, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'lastIdxOf', {
	value<T>( searchElement:T, fromIndex:number=Infinity, ):number{
		const index:number= this.lastIndexOf( searchElement, fromIndex, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findIdx', {
	value<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), ){
		const index:number= this.findIndex( predicate, );
		
		return index === -1? NaN: index;
	},
}, );

Reflect.defineProperty( Array.prototype, 'findLastIdx', {
	value<T>( predicate:(( item?:T, index?:number, self?:T[], )=>boolean), ){
		const index:number= this.findLastIndex( predicate, );
		
		return index === -1? NaN: index;
	},
}, );
