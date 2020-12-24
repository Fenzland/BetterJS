import '../global-constructors.js';

Reflect.defineProperty( AsyncFunction.prototype, 'limit', {
	value( limit=1, ){
		let counter= 0;
		
		const limitted= async ( ...args )=> {
			if( counter < limit )
			{
				++counter;
				
				return this( ...args, )
					.finally( ()=> --counter, )
				;
			}
			else
				return undefined;
		};
		
		Reflect.defineProperty( limitted, 'length', { value:this.length, }, );
		
		return limitted;
	},
}, );
