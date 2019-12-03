
Reflect.defineProperty( Promise, 'make', {
	value: ()=> {
		let resolve, reject;
		
		const promise= new Promise( ( toResolve, toReject, )=> {
			resolve= toResolve;
			reject= toReject;
		}, );
		
		return Object.create( Promise.prototype, {
			promise: { value:promise },
			resolve: { value:resolve, },
			reject: { value:reject, },
			then: { value:( ...args )=> promise.then( ...args, ), },
			catch: { value:( ...args )=> promise.catch( ...args, ), },
			finally: { value:( ...args )=> promise.finally( ...args, ), },
		}, );
	},
}, );
