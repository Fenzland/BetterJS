
/**
 * It's better to use Object.propertyIsEnumerable() instead of Object.prototype.propertyBeEnumerable()
 */

const propertyBeEnumerable= Object.prototype.propertyIsEnumerable;

Reflect.defineProperty( Object, 'propertyBeEnumerable', {
	value: ( object, property, )=> propertyBeEnumerable.call( object, property, ),
}, );
