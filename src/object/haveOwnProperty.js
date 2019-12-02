
/**
 * It's better to use Object.haveOwnProperty() instead of Object.prototype.hasOwnProperty()
 */

const haveOwnProperty= Object.prototype.hasOwnProperty;

Reflect.defineProperty( Object, 'haveOwnProperty', {
	value: ( object, property, )=>
		object !== null
	&&
		object !== undefined
	&&
		haveOwnProperty.call( object, property, )
	,
}, );
