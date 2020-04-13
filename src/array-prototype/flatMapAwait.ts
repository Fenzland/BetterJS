import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		flatMapAwait<T,R,C>( callback:(( this:C, item?:T, index?:number, self?:T[], )=>(R|Promise<R>)), context?:C, ):Promise<R[]>;
	}
}

Reflect.defineProperty( Array.prototype, 'flatMapAwait', {
	async value<T,R,C>( callback:(( this:C, item?:T, index?:number, self?:T[], )=>(R|Promise<R>)), context:C=undefined, ):Promise<R[]>{
		let index:number= 0;
		
		const result:R[]= [];
		
		for( const item of this )
		{
			const pieces:(R|R[])= await callback.call( context, item, index++, this, );
			
			if( Array.isArray( pieces, ) )
				result.push( ...pieces, )
			else
				result.push( pieces, )
		}
		
		return result;
	},
}, );
