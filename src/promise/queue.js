import '../global-constructors.js';
import './make.js';

/**
 * queue given promises to a async generator.
 */
Reflect.defineProperty( Promise, 'queue', {
	value: ( promises, )=> {
		const queue= promises.map( Promise.make, );
		const copyQueue= queue.concat();
		
		promises.forEach( promise=> promise.then( value=> copyQueue.shift().resolve( value, ), ), )
		
		return async function*(){
			yield * queue;
		}();
	},
}, );
