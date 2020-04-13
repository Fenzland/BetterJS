import '../../utils/fix_module.ts';

declare global
{
	interface PromiseConstructor
	{
		any<T>( promises:Promise<T>[], ):Promise<T>;
	}
}

Reflect.defineProperty( Promise, 'any', {
	value<T>( promises:Promise<T>[], ):Promise<T>{
		return new Promise( ( resolve:(( value?:T|PromiseLike<T>, )=>void), reject:(( reason?:any, )=>void), )=> {
			
			let isResolved:boolean= false;
			let reajectedCount:number= 0;
			const length:number= promises.length;
			const reasons:any[]= promises.map( ():void=> undefined, );
			
			promises.forEach( ( promise:Promise<T>, index:number, )=> promise.then(
				( value:T, ):void=> {
					if( !isResolved )
					{
						isResolved= true;
						
						resolve( value, )
					}
				},
				( reason:any, ):void=> {
					if( isResolved )
						return;
					
					reasons[index]= reason;
					
					if( ++reajectedCount === promises.length )
						reject( reasons, );
				}
			), );
		}, );
	},
}, );
