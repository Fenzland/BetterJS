
/**
 * Using 'fulfilled' instead of 'resolved' is strange and indiscretionary.
 * But to fix it will make broken change,
 * We provide a properties resolved (boolean) and resolved (boolean) to take place with status.
 */

const allSettled= Promise.allSettled.bind( Promise, );

Reflect.defineProperty( Promise, 'allSettled', {
	value: values=>
		allSettled( values, ).then( settleds=> settleds.map(
			settled=> (settled.rejected= !(
				settled.resolved= settled.status === 'fulfilled' || settled.status === 'resolved'
			), settled),
		), )
	,
}, );
