
/**
 * It's better to use Object.hasProperty() instead of Object.prototype.hasOwnProperty()
 */

const hasOwnProperty= Object.prototype.hasOwnProperty;

Reflect.defineProperty( Object, 'hasProperty', {
	value: ( object, property, )=> hasOwnProperty.call( object, property, ),
}, );
