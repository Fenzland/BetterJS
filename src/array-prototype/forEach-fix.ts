import '../../utils/fix_module.ts';

/**
 * fix {Array}.forEach not iterate new pushed items.
 */
Reflect.defineProperty( Array.prototype, 'forEach', {
	value<T>( callback:(( item?:T, index?:number, self?:T[] )=>void), context:any=undefined, ):void{
		let index:number= 0;
		
		for( const item of this )
			callback.call( context, item, index++, this, );
	},
}, );
