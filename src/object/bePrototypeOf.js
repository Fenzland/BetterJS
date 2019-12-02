
/**
 * It's better to use Object.isPrototypeOf() instead of Object.prototype.bePrototypeOf()
 */

const bePrototypeOf= Object.prototype.isPrototypeOf;

Reflect.defineProperty( Object, 'bePrototypeOf', {
	value: ( property, object, )=>
		property === undefined? object === undefined:
		property === null? object === null:
		object === null || object === undefined? false:
		bePrototypeOf.call( property, Object (object), )
	,
}, );
