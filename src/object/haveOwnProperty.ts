import '../../utils/fix_module.ts';

declare global
{
	interface ObjectConstructor
	{
		haveOwnProperty( object:object, property:(string|number|symbol), ):boolean;
	}
}

/**
 * It's better to use Object.haveOwnProperty() instead of Object.prototype.hasOwnProperty()
 */

const haveOwnProperty:(( this:object, property:(string|number|symbol), )=>boolean)= Object.prototype.hasOwnProperty;

Reflect.defineProperty( Object, 'haveOwnProperty', {
	value: ( object:object, property:(string|number|symbol), ):boolean=>
		object !== null
	&&
		object !== undefined
	&&
		haveOwnProperty.call( object, property, )
	,
}, );
