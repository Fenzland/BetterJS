import './haveOwnProperty.js';
import './isObject.js';

const get= ( object, property, )=> Object.haveOwnProperty( object, property, )? object[property]: undefined;
const set= ( object, property, value, )=> Object.isObject( object, )? object[property]= value: value;

Reflect.defineProperty( Object, 'get', { value:get, }, );
Reflect.defineProperty( Object, 'set', { value:set, }, );
