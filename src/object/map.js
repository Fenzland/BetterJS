
const map= ( object, callback, context=undefined, )=> Object.fromEntries(
	Object.entries( object, ).map(
		( [ key, value, ], )=> [ key, callback.call( context, value, key, object, ), ],
	)
);

Reflect.defineProperty( Object, 'map', { value: map, }, );
