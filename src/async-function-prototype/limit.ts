import '../global-constructors.ts';

declare global
{
	interface Function // this should be AsyncFunction, but TypeScript not support
	{
		limit<T extends AsyncFunction>( limit:number, ):T;
	}
}

Reflect.defineProperty( AsyncFunction.prototype, 'limit', {
	value<T extends AsyncFunction>( limit:number=1, ):T{
		let counter= 0;
		
		const limitted= async ( ...args )=> {
			let result:ReturnType<T>= undefined;
			
			if( counter < limit )
			{
				++counter;
				
				result= await this( ...args, )
					.finally( ()=> --counter, )
				;
			}
			
			return result;
		};
		
		Reflect.defineProperty( limitted, 'length', { value:this.length, }, );
		
		return limitted as T;
	},
}, );
