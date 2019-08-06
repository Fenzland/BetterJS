
Reflect.defineProperty( Promise, 'any', {
	value( promises, ){
		return new Promise( ( resolve, reject, )=> {
			
			let isResolved= false;
			let reajectedCount= 0;
			const length= promises.length;
			const reasons= promises.map( ()=> undefined, );
			
			promises.forEach( ( promise, index, )=> promise.then(
				value=> {
					if( !isResolved )
					{
						isResolved= true;
						
						resolve( value, )
					}
				},
				reason=> {
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
