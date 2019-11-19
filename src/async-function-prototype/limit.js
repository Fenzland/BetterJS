import '../global-constructors.js';

Reflect.defineProperty( AsyncFunction.prototype, 'limit', {
	value( limit=1, ){
		let counter= 0;
		
		const limitted= async ( ...args )=> {
			let result= undefined;
			
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
		
		return limitted;
	},
}, );
