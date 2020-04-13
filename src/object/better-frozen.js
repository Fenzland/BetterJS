import './isObject.js';

/**
 * @break-changes
 * 
 * remove superfluously deeming empty non-extensible object as frozen and sealed, empty sealed object as frozen
 */

const frozen= new WeakSet();
const sealed= new WeakSet();
const notExtensible= new WeakSet();

const objectFreeze= Object.freeze;
const objectSeal= Object.seal;
const objectPreventExtensions= Object.preventExtensions;
const reflectPreventExtensions= Reflect.preventExtensions;
const reflectIsExtensible= Reflect.isExtensible;


Reflect.defineProperty( Object, 'freeze', { value:{ freeze:
	object=> {
		if( !Object.isObject( object, ) )
			return object;
		
		frozen.add( object, );
		sealed.add( object, );
		notExtensible.add( object, );
		
		return objectFreeze( object, )
	}
, }.freeze, }, );

Reflect.defineProperty( Object, 'seal', { value:{ seal:
	object=> {
		if( !Object.isObject( object, ) )
			return object;
		
		sealed.add( object, );
		notExtensible.add( object, );
		
		objectSeal( object, );
	}
, }.seal, }, );

Reflect.defineProperty( Object, 'preventExtensions', { value:{ preventExtensions:
	object=> {
		if( !Object.isObject( object, ) )
			return object;
		
		notExtensible.add( object, );
		
		objectPreventExtensions( object, );
	}
, }.preventExtensions, }, );

Reflect.defineProperty( Reflect, 'preventExtensions', { value:{ preventExtensions:
	object=> {
		if( !Object.isObject( object, ) )
			return reflectPreventExtensions( object, );
		
		notExtensible.add( object, );
		
		reflectPreventExtensions( object, );
	}
, }.preventExtensions, }, );


Reflect.defineProperty( Object, 'isFrozen', { value:{ isFrozen:
	object=> !Object.isObject( object, ) || frozen.has( object, )
, }.isFrozen, }, );

Reflect.defineProperty( Object, 'isSealed', { value:{ isSealed:
	object=> !Object.isObject( object, ) || sealed.has( object, )
, }.isSealed, }, );

Reflect.defineProperty( Object, 'isExtensible', { value:{ isExtensible:
	object=> Object.isObject( object, ) && !notExtensible.has( object, )
, }.isExtensible, }, );

Reflect.defineProperty( Reflect, 'isExtensible', { value:{ isExtensible:
	object=> Object.isObject( object, )? reflectIsExtensible( object, ): !notExtensible.has( object, )
, }.isExtensible, }, );
