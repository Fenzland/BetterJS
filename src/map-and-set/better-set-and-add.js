
/**
 * @break-changes
 * 
 * Let set() of Map and WeakMap, add() of Set and WeakSet return the given value.
 */
{
	const origin= Map.prototype.set;
	
	Object.defineProperty( Map.prototype, 'set', {
		value( key, value, ){
			origin.call( this, key, value, );
			
			return value;
		},
	}, );
}
{
	const origin= WeakMap.prototype.set;
	
	Object.defineProperty( WeakMap.prototype, 'set', {
		value( key, value, ){
			origin.call( this, key, value, );
			
			return value;
		},
	}, );
}
{
	const origin= Set.prototype.add;
	
	Object.defineProperty( Set.prototype, 'add', {
		value( value, ){
			origin.call( this, value, );
			
			return value;
		},
	}, );
}
{
	const origin= WeakSet.prototype.add;
	
	Object.defineProperty( WeakSet.prototype, 'add', {
		value( value, ){
			origin.call( this, value, );
			
			return value;
		},
	}, );
}
