import '../object/better-frozen.js';

/**
 * @break-changes
 * 
 * Not add or set value with new key when the object is not extensible
 * Not delete value when the object is sealed
 * Not set value when the object is frozen
 * 
 * Let set() of Map and WeakMap, add() of Set and WeakSet return the given value.
 */
{
	const origin= Map.prototype.set;
	
	Reflect.defineProperty( Map.prototype, 'set', {
		value: function set( key, value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen map', );
			if( !Object.isExtensible( this, ) && !this.has( key, ) )
				throw new TypeError( 'cannot add a new key to a non-extensible map', );
			
			origin.call( this, key, value, );
			
			return value;
		},
	}, );
}
{
	const origin= WeakMap.prototype.set;
	
	Reflect.defineProperty( WeakMap.prototype, 'set', {
		value: function set( key, value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen weak map', );
			if( !Object.isExtensible( this, ) && !this.has( key, ) )
				throw new TypeError( 'cannot add a new key to a non-extensible weak map', );
			
			origin.call( this, key, value, );
			
			return value;
		},
	}, );
}
{
	const origin= Set.prototype.add;
	
	Reflect.defineProperty( Set.prototype, 'add', {
		value: function add( value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen set', );
			if( !Object.isExtensible( this, ) && !this.has( value, ) )
				throw new TypeError( 'cannot add a new value to a non-extensible set', );
			
			origin.call( this, value, );
			
			return value;
		},
	}, );
}
{
	const origin= WeakSet.prototype.add;
	
	Reflect.defineProperty( WeakSet.prototype, 'add', {
		value: function add( value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen weak set', );
			if( !Object.isExtensible( this, ) && !this.has( value, ) )
				throw new TypeError( 'cannot add a new value to a non-extensible weak set', );
			
			origin.call( this, value, );
			
			return value;
		},
	}, );
}

{
	const origin= Map.prototype.delete;
	
	Reflect.defineProperty( Map.prototype, 'delete', {
		value: { delete:function( key, value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen map', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete item from a sealed map', );
			
			return origin.call( this, key, value, );
		}, }.delete,
	}, );
}
{
	const origin= WeakMap.prototype.delete;
	
	Reflect.defineProperty( WeakMap.prototype, 'delete', {
		value: { delete:function( key, value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen weak map', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete item from a sealed weak map', );
			
			return origin.call( this, key, value, );
		}, }.delete,
	}, );
}
{
	const origin= Set.prototype.delete;
	
	Reflect.defineProperty( Set.prototype, 'delete', {
		value: { delete:function( value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen set', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete value from a sealed set', );
			
			return origin.call( this, value, );
		}, }.delete,
	}, );
}
{
	const origin= WeakSet.prototype.delete;
	
	Reflect.defineProperty( WeakSet.prototype, 'delete', {
		value: { delete:function( value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen weak set', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete value from a sealed weak set', );
			
			return origin.call( this, value, );
		}, }.delete,
	}, );
}

{
	const origin= Map.prototype.clear;
	
	Reflect.defineProperty( Map.prototype, 'clear', {
		value: function clear( key, value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen map', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete item from a sealed map', );
			
			return origin.call( this, key, value, );
		},
	}, );
}
{
	const origin= WeakMap.prototype.clear;
	
	Reflect.defineProperty( WeakMap.prototype, 'clear', {
		value: function clear( key, value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen weak map', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete item from a sealed weak map', );
			
			return origin.call( this, key, value, );
		},
	}, );
}
{
	const origin= Set.prototype.clear;
	
	Reflect.defineProperty( Set.prototype, 'clear', {
		value: function clear( value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen set', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete value from a sealed set', );
			
			return origin.call( this, value, );
		},
	}, );
}
{
	const origin= WeakSet.prototype.clear;
	
	Reflect.defineProperty( WeakSet.prototype, 'clear', {
		value: function clear( value, ){
			if( Object.isFrozen( this, ) )
				throw new TypeError( 'cannot modify a frozen weak set', );
			if( Object.isSealed( this, ) )
				throw new TypeError( 'cannot delete value from a sealed weak set', );
			
			return origin.call( this, value, );
		},
	}, );
}
