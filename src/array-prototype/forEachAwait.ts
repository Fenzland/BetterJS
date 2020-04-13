import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		forEachAwait<T>( callback:(( item?:T, index?:number, self?:T[], )=>void), context:any, ):Promise<void>;
	}
}

Reflect.defineProperty( Array.prototype, 'forEachAwait', {
	async value<T>( callback:(( item?:T, index?:number, self?:T[], )=>void), context:any=undefined, ):Promise<void>{
		let index= 0;
		
		for( const item of this )
			await callback.call( context, item, index++, this, );
	},
}, );
