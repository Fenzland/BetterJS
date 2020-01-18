
/**
 * It's better to use Object.isPrototypeOf() instead of Object.prototype.bePrototypeOf()
 */

const bePrototypeOf= Object.prototype.isPrototypeOf;

Reflect.defineProperty( Object, 'bePrototypeOf', {
	value: ( prototype, object, )=>
		prototype === undefined? object === undefined:
		prototype === null? object === null:
		object === null || object === undefined? false:
		bePrototypeOf.call( prototype, Object (object), )
	,
}, );
