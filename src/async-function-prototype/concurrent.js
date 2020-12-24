import '../promise/make.js';
import '../global-constructors.js';

Reflect.defineProperty( AsyncFunction.prototype, 'concurrent', {
	value( concurrency=64, ){
		let counter= 0;
		let token;
		
		const concurred= async ( ...args )=> {
			if( counter >= concurrency )
				await token;
			
			++counter;
			
			if( counter >= concurrency )
				token= Promise.make();
			
			
			return this( ...args, )
				.finally( ()=> {
					--counter;
					
					if( counter < concurrency && token )
						token.resolve();
				}, )
			;
		};
		
		Reflect.defineProperty( concurred, 'length', { value:this.length, }, );
		
		return concurred;
	},
}, );
