import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		mapAwait<T,R,C>( callback:(( this:C, item?:T, index?:number, self?:T[], )=>(R|Promise<R>)), context?:C, ):Promise<R[]>;
	}
}

Reflect.defineProperty( Array.prototype, 'mapAwait', {
	async value<T,R,C>( callback:(( this:C, item?:T, index?:number, self?:T[], )=>(R|Promise<R>)), context:C=undefined, ):Promise<R[]>{
		let index:number= 0;
		
		const result:R[]= [];
		
		for( const item of this )
			result.push( await callback.call( context, item, index++, this, ), );
		
		return result;
	},
}, );
