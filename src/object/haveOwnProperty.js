
/**
 * It's better to use Object.hasProperty() instead of Object.prototype.hasOwnProperty()
 */

const haveOwnProperty= Object.prototype.hasOwnProperty;

Reflect.defineProperty( Object, 'haveOwnProperty', {
	value: ( object, property, )=> haveOwnProperty.call( object, property, ),
}, );
