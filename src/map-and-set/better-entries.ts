import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		entries<K,V>():[ K, V, ][];
		keys<K,V>():K[];
		values<K,V>():V[];
	}
	
	interface Set<T>
	{
		entries<T>():[ T, T, ][];
		keys<T>():T[];
		values<T>():T[];
	}
}

const mapEntries= Map.prototype.entries;

Reflect.defineProperty( Map.prototype, 'entries', {
	value<K,V>():[ K, V, ][]{
		return [ ...mapEntries.call( this, ), ];
	},
}, );

const mapKeys= Map.prototype.keys;

Reflect.defineProperty( Map.prototype, 'keys', {
	value<K,V>():K[]{
		return [ ...mapKeys.call( this, ), ];
	},
}, );

const mapValues= Map.prototype.values;

Reflect.defineProperty( Map.prototype, 'values', {
	value<K,V>():V[]{
		return [ ...mapValues.call( this, ), ];
	},
}, );

const setEntries= Set.prototype.entries;

Reflect.defineProperty( Set.prototype, 'entries', {
	value<T>():[ T, T, ][]{
		return [ ...setEntries.call( this, ), ];
	},
}, );

const setKeys= Set.prototype.keys;

Reflect.defineProperty( Set.prototype, 'keys', {
	value<T>():T[]{
		return [ ...setKeys.call( this, ), ];
	},
}, );

const setValues= Set.prototype.values;

Reflect.defineProperty( Set.prototype, 'values', {
	value<T>():T[]{
		return [ ...setValues.call( this, ), ];
	},
}, );
