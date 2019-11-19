
/**
 * It's better to use Object.isPrototypeOf() instead of Object.prototype.bePrototypeOf()
 */

const bePrototypeOf= Object.prototype.isPrototypeOf;

Reflect.defineProperty( Object, 'bePrototypeOf', {
	value: ( object, property, )=> bePrototypeOf.call( object, property, ),
}, );
